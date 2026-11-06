/* The plans panel rotates between Personal and Professional.
 *
 * Owen, 2026-11-05: "make the section a dynamic auto sliding carousel which switches between
 * the two plans". The copy is his and lives in the document; this file only moves it, and it
 * is deliberately easy to stop:
 *   - it pauses while the pointer is over the panel or anything in it has focus, and it stays
 *     stopped once a person picks a plan by hand, because an offer that slides away mid-read is
 *     an offer nobody finishes;
 *   - it never starts under prefers-reduced-motion (the panels then simply change, with no
 *     travel), and it follows that setting if it changes while the page is open;
 *   - the inactive panel is aria-hidden so a screen reader reads one plan, not two at once;
 *   - the dots are real buttons with aria-pressed, so the section is operable without waiting
 *     for the rotation (WCAG 2.2.2: auto-advancing content must be stoppable).
 */
(function () {
  var root = document.querySelector('[data-plan-carousel]');
  if (!root) return;
  var track = root.querySelector('.beta-plan-track');
  var plans = [].slice.call(root.querySelectorAll('.beta-plan'));
  var dots = [].slice.call(root.querySelectorAll('.beta-plan-dot'));
  if (!track || plans.length < 2) return;

  var DELAY = 8000;
  var index = 0;
  var timer = null;
  var held = false;      /* pointer or focus inside */
  var chosen = false;    /* a person picked a plan by hand */
  var media = window.matchMedia('(prefers-reduced-motion: reduce)');

  function paint(next) {
    index = (next + plans.length) % plans.length;
    track.style.transform = 'translateX(' + (-index * 100) + '%)';
    plans.forEach(function (plan, i) {
      if (i === index) plan.removeAttribute('aria-hidden');
      else plan.setAttribute('aria-hidden', 'true');
    });
    dots.forEach(function (dot, i) {
      dot.setAttribute('aria-pressed', i === index ? 'true' : 'false');
    });
  }

  function stop() {
    if (timer !== null) { window.clearInterval(timer); timer = null; }
  }

  function start() {
    stop();
    if (media.matches || held || chosen) return;
    timer = window.setInterval(function () { paint(index + 1); }, DELAY);
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      chosen = true;
      stop();
      paint(i);
    });
  });

  root.addEventListener('pointerenter', function () { held = true; stop(); });
  root.addEventListener('pointerleave', function () { held = false; start(); });
  root.addEventListener('focusin', function () { held = true; stop(); });
  root.addEventListener('focusout', function () {
    if (!root.contains(document.activeElement)) { held = false; start(); }
  });

  if (media.addEventListener) {
    media.addEventListener('change', function () { paint(index); start(); });
  }

  paint(0);
  start();
})();
