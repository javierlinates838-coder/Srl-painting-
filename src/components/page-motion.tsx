"use client";

import { useEffect } from "react";

// Progressive enhancement: content stays visible if scripts or animation fail.
export function PageMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !window.IntersectionObserver || !Element.prototype.animate) return;
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        entry.target.classList.remove("is-armed");
        entry.target.classList.add("is-in");
        if (preference.matches || entry.target.contains(document.activeElement)) continue;
        const animation = entry.target.animate(
          [{ opacity: .4, transform: "translateY(24px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 700, easing: "cubic-bezier(.22,1,.36,1)" },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { threshold: .12 });
    document.querySelectorAll("[data-reveal]").forEach((element) => {
      // Only hide headings that are still below the fold, so nothing flashes.
      if (element.getBoundingClientRect().top > window.innerHeight) element.classList.add("is-armed");
      observer.observe(element);
    });
    // Primary buttons lean a few pixels toward the pointer.
    const magnets = Array.from(document.querySelectorAll<HTMLElement>(".button.primary"));
    const pull = (event: PointerEvent) => {
      const el = event.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      el.style.translate = `${((event.clientX - r.left) / r.width - 0.5) * 10}px ${((event.clientY - r.top) / r.height - 0.5) * 8}px`;
    };
    const release = (event: PointerEvent) => { (event.currentTarget as HTMLElement).style.translate = ""; };
    if (window.matchMedia("(pointer: fine)").matches) magnets.forEach((el) => { el.addEventListener("pointermove", pull); el.addEventListener("pointerleave", release); });
    // Drips start short once JS is running, then run down when they come into view.
    const drips = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add("is-in"); drips.unobserve(entry.target); }
    }, { threshold: .4 });
    document.querySelectorAll("[data-drips]").forEach((element) => { element.classList.add("is-armed"); drips.observe(element); });
    function stop() { if (preference.matches) { observer.disconnect(); animations.forEach((animation) => animation.cancel()); } }
    preference.addEventListener("change", stop);
    return () => { magnets.forEach((el) => { el.removeEventListener("pointermove", pull); el.removeEventListener("pointerleave", release); }); observer.disconnect(); drips.disconnect(); preference.removeEventListener("change", stop); animations.forEach((animation) => animation.cancel()); };
  }, []);
  return null;
}
