# e-server and the agent workspace

The complete product is e-server. Customers get an e-server where their
hosted agents live, run and work; agent-harness is its AI workspace. Dexter runs
locally on the user’s own machine. The two-week offer remains free AI credits,
three beta models and a tailored harness; no quota or blanket free-platform
entitlement is invented.

**2026-10-27: the interactive preview is gone, and the first screen is the loop.** Owen
asked for the Agent-harness "Interactive preview" section to be removed and for the hero to
become a full-screen opening whose background is `Hero Loop.html`. So `#harness`, its
`.harness-demo` render, the `.render-caption` line and every `demo-*` rule and handler went
with it (51 dead rules in `styles.css`, 80 in `components.css`, the demo half of
`site.js`), and `site/assets/hero-loop.html` now plays behind a full-viewport hero. The
paragraph below is the record of the preview AS IT WAS, kept for the reasoning it holds
(what was fictional, what was labelled) rather than as a description of the page today.

The six supplied ah0–ah5 screenshots were reviewed. They show a dark inbox,
agent channels, Epsilon task lists and swarm controls. The marketing render uses
those visual patterns, existing agent avatars and newly authored HTML/CSS. All
conversation, task and status content is fictional and visibly labelled. No raw
screenshots or private work details are included in the deliverable. The inbox,
peer channels and worker selector are interactive illustrations, not live agents.

Public model disclosure stays at the limit Owen specified:
- Delta runs Epsilon; each swarm worker has one expert job.
- Darwin is a pro model for demanding scrutiny. No numerical accuracy, reliability or safety guarantee is published.
- Diana is Epsilon with expert=chat.
- Dexter is a customisable local companion that scales to the user's machine.

Agent roles are based on Owen's brief: Delta leads technical development and sprint
coordination; Darwin provides review and escalation; Diana serves conversational
and lightweight integration tasks. Epsilon workers are not advertised as a fourth
customer model. Dexter is distinct from the proprietary beta-model offer.

Dexter's persona, voice, supported-work continuation after hosted credits run out,
and Linux/Windows/macOS experience are labelled standalone direction. They were
not verified as working in this prototype. Do not claim general availability or
platform-tested operation until it is demonstrated. Do not disclose model provider,
weights, parameter counts, routing logic or private configuration.

Owen and Hannah’s supplied profile photographs are used for their respective cards.
The photo itself is preserved; the circular crop is presentation-only CSS. The
footer now shows Engineering, Entertainment, Education, Enterprise above copyright.

The revised compact page retains the harness and platform renders, groups the
three platform features into keyboard-accessible tabs, and removes repeated
marketing sections. Render interactions remain illustrative. Beta requests use
an explicit email draft rather than the previous JSON-download prototype.
