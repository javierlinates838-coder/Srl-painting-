"use client";

import { useLayoutEffect, useRef, useState } from "react";

type Options = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

function isInViewport(el: HTMLElement, rootMargin = "0px") {
  const m = rootMargin.match(/(-?\d+)px/g)?.map(Number) ?? [0, 0, 0, 0];
  const top = m[0] ?? 0;
  const right = m[1] ?? 0;
  const bottom = m[2] ?? 0;
  const left = m[3] ?? 0;
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight - bottom &&
    rect.bottom > -top &&
    rect.left < window.innerWidth - right &&
    rect.right > -left
  );
}

export function useInView({ threshold = 0.12, rootMargin = "0px 0px -40px 0px", once = true }: Options = {}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (isInViewport(el, rootMargin)) {
      setInView(true);
      if (once) return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
