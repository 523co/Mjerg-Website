/* Shared behaviour for every page: mobile nav, active nav link, and
   swapping the values from config.js into the markup. */

(function () {
  "use strict";

  var cfg = window.MJERG || {};

  /* --- mobile nav ------------------------------------------------- */

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });

    // close it when you tap a link, otherwise the menu hangs around
    // over the top of the page you just navigated to on iOS
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      }
    });
  }

  /* --- highlight the current page in the nav ---------------------- */

  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(function (a) {
    if (a.getAttribute("href") === here) {
      a.setAttribute("aria-current", "page");
    }
  });

  /* --- config injection ------------------------------------------- */

  // <a data-link="add">  ->  href from config
  document.querySelectorAll("[data-link]").forEach(function (el) {
    var url = (cfg.links || {})[el.dataset.link];
    if (!url) return;
    el.setAttribute("href", url);
    if (url === "#") {
      el.setAttribute("aria-disabled", "true");
      el.title = "Link not set yet";
    } else if (/^https?:/.test(url) && url.indexOf(location.host) === -1) {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
  });

  // <span data-cfg="prefix"> -> text from config
  document.querySelectorAll("[data-cfg]").forEach(function (el) {
    var v = cfg[el.dataset.cfg];
    if (v != null) el.textContent = v;
  });

  // Command samples are written in the HTML with the default "!" prefix so
  // they read correctly with JS off. If someone has set a different prefix
  // in config.js, swap it in here. Each .js-prefix element holds exactly one
  // command, which is why anchoring to the start is enough.
  if (cfg.prefix && cfg.prefix !== "!") {
    document.querySelectorAll(".js-prefix").forEach(function (el) {
      el.textContent = el.textContent.replace(/^!/, cfg.prefix);
    });
  }

  /* --- home page stats -------------------------------------------- */

  var statBox = document.getElementById("stats");
  if (statBox && cfg.stats) {
    statBox.innerHTML = cfg.stats.map(function (s) {
      return '<div class="stat"><b>' + s.value + "</b><span>" + s.label + "</span></div>";
    }).join("");
  }

  /* --- footer year ------------------------------------------------ */

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
