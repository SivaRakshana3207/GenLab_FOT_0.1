(() => {
  const splash = document.getElementById("splash");
  const hero = document.getElementById("hero");

  if (!splash || !hero) return;

  const revealHero = () => {
    hero.classList.remove("hero-hidden");
    hero.classList.add("hero-active");
  };

  // Keep timing aligned with splashFadeOut delay + duration.
  window.setTimeout(revealHero, 3000);

  splash.addEventListener("animationend", (event) => {
    if (event.animationName === "splashFadeOut") {
      splash.remove();
    }
  });
})();
