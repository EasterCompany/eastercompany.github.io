#!/usr/bin/env bash
# Run a browser gate so its browser CANNOT outlive it.
#
# WHY THIS EXISTS — MEASURED 2026-11-06 21:20 on the machine that runs this repository:
# `uptime` said load average 20.87 on a 16-thread box and the load was twelve orphaned
# Chromium trees, nine to twelve processes each, 4,100-4,900 CPU-seconds apiece over 80-100
# minutes. Five of the twelve had this repository as their working directory: they were
# scripts/hero_theme_browser.mjs, page_theme_browser.mjs and account_light_browser.mjs runs
# whose node process had been killed (a timeout, a deploy, a killed shell) while the browser
# was still a separate process tree that nothing was going to close. The scripts themselves
# are fine — each closes its browser in a `finally`, and Playwright also closes on a throw
# because it hooks node's `exit`. What leaks is the driver being KILLED: then no handler
# runs, and killing node does not kill its browser.
#
# HOW IT IS PREVENTED: the gate runs in its own cgroup, `easter-browser-gate.<pid>`, which
# is inherited at fork by everything the gate starts. Chromium cannot leave a cgroup (it
# calls setsid(), so a SESSION marker does not work, and it RESETS its environment, so an
# environment marker does not work either — both measured). One line — `echo 1 >
# cgroup.kill` — kills the whole tree, on success, on failure and on a signal.
#
# Usage:  scripts/browser_gate.sh node scripts/hero_theme_browser.mjs
#         scripts/browser_gate.sh node scripts/page_theme_browser.mjs
# Falls back to running the command directly, and says so, where cgroups are not writable.
set -uo pipefail

if [ "$#" -eq 0 ]; then
    echo "browser_gate: nothing to run" >&2
    exit 2
fi

cg="/sys/fs/cgroup/easter-browser-gate.$$"
reap() {
    if [ -w "$cg/cgroup.kill" ]; then
        # The kill is asynchronous inside the kernel; give it a moment, then remove the dir.
        echo 1 > "$cg/cgroup.kill" 2>/dev/null || true
        for _ in $(seq 1 25); do
            [ -s "$cg/cgroup.procs" ] || break
            sleep 0.2
        done
        rmdir "$cg" 2>/dev/null || true
    fi
}

if mkdir -p "$cg" 2>/dev/null && [ -w "$cg/cgroup.procs" ]; then
    trap reap EXIT
    trap 'reap; exit 143' TERM INT
    printf '%s\n' "$$" > "$cg/cgroup.procs" || true
else
    echo "browser_gate: no writable cgroup at $cg — running without one; a killed run may leak a browser" >&2
fi

"$@"
status=$?
exit "$status"
