/* RETRO-COSMOS: injects the cosmic layers, drives planets from scroll, fires shooting stars.
   Pure decoration: touches no existing element. Add ?motion=off to disable. */
(() => {
  if (new URLSearchParams(location.search).get("motion") === "off") { document.documentElement.dataset.motion = "off"; return; }
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const layer = document.createElement("div");
  layer.className = "rc-layer"; layer.setAttribute("aria-hidden", "true");
  layer.innerHTML = '<div class="rc-nebula"></div><div class="rc-grid"></div><div class="rc-planet rc-p1"></div><div class="rc-planet rc-p2"></div>';
  document.body.prepend(layer);
  const planets = [[layer.querySelector(".rc-p1"), 0.38], [layer.querySelector(".rc-p2"), 0.78]]; // [element, scroll centre 0-1]
  let ticking = false;
  // A planet fades in, grows as the reader "approaches" it, then dissolves past its centre.
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    const s = max > 0 ? scrollY / max : 0;
    planets.forEach(([el, c]) => {
      const t = Math.max(0, 1 - Math.abs(s - c) / 0.3);
      el.style.setProperty("--o", (still ? Math.min(t, .6) : t).toFixed(3));
      el.style.setProperty("--s", (0.55 + Math.max(0, Math.min(1, (s - (c - 0.3)) / 0.6)) * 1.1).toFixed(3));
    });
    ticking = false;
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener("resize", update); update();
  if (still) return;
  const shoot = () => {
    if (document.hidden) return;
    const s = document.createElement("i"); s.className = "rc-shoot";
    s.style.left = 40 + Math.random() * 55 + "%"; s.style.top = Math.random() * 40 + "%";
    layer.append(s); s.addEventListener("animationend", () => s.remove());
  };
  (function loop() { setTimeout(() => { shoot(); loop(); }, 7000 + Math.random() * 9000); })();
})();
