/*
 *    Overlord JS
 *
 *    Extends JavaScript with simple APIs for interfacing
 *    with the Overlord ecosystem.
 */
const alertBannerEl = document.querySelector('#alert-banner');
const alertBannerTitleEl = document.querySelector('#alert-banner-title');
const alertBannerTextEl = document.querySelector('#alert-banner-text');
const alertBannerIconEl = document.querySelector('#alert-banner-icon');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function remove(el) {
  return el.classList.add('remove');
}

function add(el) {
  return el.classList.remove('remove');
}

function hide(el) {
  return el.classList.add('hide');
}

function show(el, fadeInSeconds) {
  const defaultStyle = el.style;
  if (fadeInSeconds) {
    el.style = {
      ...el.style,
      opacity: 0,
      transition: `${fadeInSeconds}s ease-in-out`
    };
  }

  if (!el.classList.contains('hide') && el.classList.contains('remove')) {
    el.classList.add('hide');
    el.classList.remove('remove');
  } else if (el.classList.contains('remove')) {
    el.classList.remove('remove');
  }

  el.classList.remove('hide');
  if (fadeInSeconds) {
    el.style.opacity = 1;
    sleep(fadeInSeconds).then(() => el.style = defaultStyle);
  }
  return;
}

function activate(el) {
  el.disabled = false;
  el.classList.remove('disabled');
  return el.classList.add('active');
}

function disable(el) {
  el.disabled = true;
  el.classList.add('disabled');
  return el.classList.remove('active');
}

function addClass(el, className) {
  el.classList.add(className);
}

function removeClass(el, className) {
  el.classList.remove(className);
}

function toggleClass(el, className) {
  el.classList.toggleClass(className);
}

async function alertBanner(title = "ALERT", text = "", timeout = 10, icon = "bx bxs-error-alt") {
  if (!alertBanner) return;
  alertBannerTitleEl.innerText = title;
  alertBannerTextEl.innerText = text;
  alertBannerIconEl.className = icon;
  show(alertBannerEl);
  setTimeout(async () => {
    if (alertBannerTitleEl.innerText === title) {
      hide(alertBannerEl)
    }
  }, timeout * 1000);
};

class StepFunction {
  constructor() {
    this.functions = [];
    this.intervalId = null;
    this.isRunning = false;
  }

  add(func) {
    if (typeof func === 'function') {
      this.functions.push(func);
    } else {
      console.error('Added item is not a function.');
    }
  }

  remove(func) {
    const index = this.functions.indexOf(func);
    if (index !== -1) {
      this.functions.splice(index, 1);
    }
  }

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.intervalId = setInterval(() => {
        this.functions.forEach((func) => {
          func();
        });
      }, 1000 / 3);
    }
  }

  stop() {
    if (this.isRunning) {
      clearInterval(this.intervalId);
      this.isRunning = false;
      this.intervalId = null;
    }
  }
}

const step = new StepFunction();

window.onload = function () {
  console.log("Page fully loaded (including resources).");
  setTimeout(() => {
    step.start();
  }, 1500);
};

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM content loaded.");
});
