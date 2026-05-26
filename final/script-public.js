/* =========================================================
   AM Landing — interaction script (English-only)
   ========================================================= */

(() => {
  "use strict";

  /* ---------- Header shadow on scroll ---------- */
  const header = document.querySelector("[data-header]");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Case slider ---------- */
  const slider = document.querySelector("[data-slider]");
  const cards = slider ? Array.from(slider.querySelectorAll(".case-card")) : [];
  const dots = Array.from(document.querySelectorAll("[data-dot]"));
  const prevBtn = document.querySelector("[data-prev]");
  const nextBtn = document.querySelector("[data-next]");

  if (slider && cards.length) {
    let activeIndex = 0;

    const setActive = (index) => {
      activeIndex = Math.max(0, Math.min(cards.length - 1, index));
      cards.forEach((card, i) => card.classList.toggle("is-active", i === activeIndex));
      dots.forEach((dot, i) => dot.classList.toggle("is-active", i === activeIndex));
      if (prevBtn) prevBtn.disabled = activeIndex === 0;
      if (nextBtn) nextBtn.disabled = activeIndex === cards.length - 1;
    };

    const scrollToCard = (index) => {
      const target = cards[index];
      if (!target) return;
      const sliderRect = slider.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const offset = targetRect.left - sliderRect.left + slider.scrollLeft
                   - (slider.clientWidth - target.clientWidth) / 2;
      slider.scrollTo({ left: offset, behavior: "smooth" });
    };

    // Track scroll to update active card via IntersectionObserver
    if ("IntersectionObserver" in window) {
      const sliderIo = new IntersectionObserver(
        (entries) => {
          let bestEntry = null;
          entries.forEach((entry) => {
            if (entry.isIntersecting && (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio)) {
              bestEntry = entry;
            }
          });
          if (bestEntry) {
            const i = cards.indexOf(bestEntry.target);
            if (i !== -1 && i !== activeIndex) setActive(i);
          }
        },
        { root: slider, threshold: [0.55, 0.75, 0.95] }
      );
      cards.forEach((card) => sliderIo.observe(card));
    }

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        setActive(i);
        scrollToCard(i);
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const i = Math.max(0, activeIndex - 1);
        setActive(i);
        scrollToCard(i);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const i = Math.min(cards.length - 1, activeIndex + 1);
        setActive(i);
        scrollToCard(i);
      });
    }

    // Keyboard navigation
    slider.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        const i = Math.min(cards.length - 1, activeIndex + 1);
        setActive(i); scrollToCard(i);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const i = Math.max(0, activeIndex - 1);
        setActive(i); scrollToCard(i);
      }
    });

    setActive(0);
  }

  /* ---------- Sticky mobile CTA visibility ---------- */
  const stickyCta = document.querySelector("[data-sticky-cta]");
  const hero = document.querySelector(".hero");
  const finalCta = document.getElementById("start");

  if (stickyCta && hero) {
    const isMobile = () => window.matchMedia("(max-width: 639px)").matches;

    const updateSticky = () => {
      if (!isMobile()) {
        stickyCta.classList.remove("is-visible");
        return;
      }
      const heroBottom = hero.getBoundingClientRect().bottom;
      const finalTop = finalCta ? finalCta.getBoundingClientRect().top : Infinity;
      const viewportH = window.innerHeight;
      // Show when hero is mostly out of view AND we haven't reached the final CTA
      const show = heroBottom < viewportH * 0.4 && finalTop > viewportH * 0.85;
      stickyCta.classList.toggle("is-visible", show);
    };

    updateSticky();
    window.addEventListener("scroll", updateSticky, { passive: true });
    window.addEventListener("resize", updateSticky);
  }
})();
