/* =========================================================
   En Órbita · Interacciones generales de la página
   ========================================================= */
(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");

  /* ---------- Menú en celulares ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  function closeNav() {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
  }
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });
  nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeNav); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeNav(); });

  /* ---------- Sombra del header al hacer scroll ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Aparición suave de secciones ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- Marcar la sección activa en el menú ---------- */
  var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]:not(.btn)'));
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (l) { l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(function (l) {
      var sec = document.querySelector(l.getAttribute("href"));
      if (sec) spy.observe(sec);
    });
  }

  /* ---------- Enlace a Landbot (cuando exista) ---------- */
  // Se configura en js/config.js. Solo se aceptan enlaces https y nunca el editor privado.
  var cfg = window.EN_ORBITA_CONFIG || {};
  var url = (cfg.LANDBOT_URL || "").trim();
  var valid = /^https:\/\//i.test(url) && url.indexOf("app.landbot.io/gui") === -1;
  if (valid) {
    document.querySelectorAll("[data-cta-primary]").forEach(function (a) {
      a.textContent = "Probar OrbiBot";
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
    });
    var live = document.getElementById("live-cta");
    var liveLink = document.getElementById("live-link");
    if (live && liveLink) { liveLink.href = url; live.hidden = false; }
  }
})();
