"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Full-width band with a muted, looping project reel behind it. The file is
// only fetched when the band nears the screen, and pauses when it leaves.
export function VideoBand({ children }: { children: ReactNode }) {
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = video.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.some((e) => e.isIntersecting);
      if (visible) {
        if (!el.src) el.src = el.dataset.src ?? "";
        el.play().catch(() => {});
      } else el.pause();
    }, { rootMargin: "300px 0px" });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="video-band" aria-label="SRL Painting project reel">
      <video ref={video} data-src="/video/reel.mp4" poster="/video/reel-poster.jpg" muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} />
      <div className="video-band-shade" aria-hidden="true" />
      {children}
    </section>
  );
}
