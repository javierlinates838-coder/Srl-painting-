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
        if (preference.matches || entry.target.contains(document.activeElement)) continue;
        const animation = entry.target.animate(
          [{ opacity: .65, transform: "translateY(16px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 650, easing: "cubic-bezier(.22,1,.36,1)" },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { threshold: .12 });
    document.querySelectorAll(".hero-copy, .project-reveal, .section-heading, .craft-copy, .process-grid, .area-section > div, .contact-copy").forEach((element) => observer.observe(element));
    function stop() { if (preference.matches) { observer.disconnect(); animations.forEach((animation) => animation.cancel()); } }
    preference.addEventListener("change", stop);
    return () => { observer.disconnect(); preference.removeEventListener("change", stop); animations.forEach((animation) => animation.cancel()); };
  }, []);
  return null;
}
