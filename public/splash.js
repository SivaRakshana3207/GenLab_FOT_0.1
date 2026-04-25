(() => {
  const splash = document.getElementById("splash");
  const hero = document.getElementById("hero");

  if (!hero) return;

  const revealHero = () => {
    hero.classList.remove("hero-hidden");
    hero.classList.add("hero-active");
  };

  const initHoverSquares = () => {
    let lastSpawnAt = 0;

    const spawnSquare = (event) => {
      const now = performance.now();
      if (now - lastSpawnAt < 45) return;
      lastSpawnAt = now;

      const bounds = hero.getBoundingClientRect();
      const square = document.createElement("span");
      square.className = "hover-square";
      square.style.left = `${event.clientX - bounds.left}px`;
      square.style.top = `${event.clientY - bounds.top}px`;

      hero.appendChild(square);
      square.addEventListener("animationend", () => square.remove(), { once: true });
    };

    hero.addEventListener("mousemove", spawnSquare);
  };

  if (splash) {
    // Keep timing aligned with splashFadeOut delay + duration.
    window.setTimeout(() => {
      revealHero();
      initHoverSquares();
    }, 3000);

    splash.addEventListener("animationend", (event) => {
      if (event.animationName === "splashFadeOut") {
        splash.remove();
      }
    });
  } else {
    revealHero();
    initHoverSquares();
  }
})();
