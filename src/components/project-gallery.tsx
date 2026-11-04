"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projects, type ProjectCategory } from "@/lib/site";
import { SrlIcon } from "./srl-icon";

const filters: ("All" | ProjectCategory)[] = ["All", "Exterior", "Interior", "Cabinets", "Outdoor"];

// Ragged brush-stroke silhouette used to mask every photo in the strip.
const brush =
  "M20 25 L44 37 L68 36 L92 24 L116 25 L140 26 L164 35 L188 25 L212 37 L236 33 L260 42 L284 36 L308 14 L332 17 L356 13 L380 18 L404 36 L428 35 L452 20 L476 38 L500 27 L524 42 L548 37 L572 42 L596 35 L620 28 L644 29 L668 24 L692 40 L716 36 L740 26 L764 19 L788 34 L812 29 L836 30 L860 32 L884 38 L908 41 L932 25 L956 34 L980 23 L984 84 L998 140 L972 192 L995 246 L976 300 L987 354 L970 406 L989 460 L965 514 L996 568 L980 563 L956 581 L932 575 L908 563 L884 557 L860 567 L836 571 L812 563 L788 581 L764 582 L740 571 L716 560 L692 579 L668 566 L644 580 L620 567 L596 572 L572 560 L548 572 L524 583 L500 578 L476 566 L452 571 L428 577 L404 560 L380 566 L356 560 L332 572 L308 578 L284 573 L260 583 L236 565 L212 561 L188 575 L164 582 L140 570 L116 582 L92 564 L68 575 L44 566 L20 579 L18 520 L32 466 L6 412 L28 358 L10 304 L34 250 L14 196 L22 142 L2 88 L30 34Z";

export function ProjectGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const [index, setIndex] = useState(0);
  const strip = useRef<HTMLUListElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (open !== null && !element.open) element.showModal();
    if (open === null && element.open) element.close();
  }, [open]);

  // Track which card is centred so the counter and dots follow native scroll.
  useEffect(() => {
    const el = strip.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const cards = Array.from(el.children) as HTMLElement[];
      const centre = el.scrollLeft + el.clientWidth / 2;
      let best = 0, dist = Infinity;
      cards.forEach((card, i) => {
        const d = Math.abs(card.offsetLeft + card.offsetWidth / 2 - centre);
        if (d < dist) { dist = d; best = i; }
      });
      setIndex(best);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    el.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => { el.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [visible.length]);

  function scrollTo(i: number) {
    const el = strip.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (!el || !card) return;
    el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2, behavior: "smooth" });
  }
  function step(delta: number) {
    setOpen((current) => current === null ? null : (current + delta + visible.length) % visible.length);
  }
  const current = open === null ? null : visible[open];

  return (
    <div className="showcase">
      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="brush-mask" clipPathUnits="objectBoundingBox">
            <path transform="scale(0.001, 0.0016667)" d={brush} />
          </clipPath>
        </defs>
      </svg>

      <div className="showcase-bar">
        <div className="gallery-filters" role="group" aria-label="Filter projects">
          {filters.map((name) => (
            <button key={name} type="button" aria-pressed={filter === name}
              onClick={() => { setFilter(name); strip.current?.scrollTo({ left: 0 }); }}>
              {name}
            </button>
          ))}
        </div>
        <div className="showcase-nav">
          <span className="showcase-count" aria-live="polite">
            <strong>{String(index + 1).padStart(2, "0")}</strong> / {String(visible.length).padStart(2, "0")}
          </span>
          <button type="button" onClick={() => scrollTo(Math.max(0, index - 1))} aria-label="Previous project"><SrlIcon name="left" /></button>
          <button type="button" onClick={() => scrollTo(Math.min(visible.length - 1, index + 1))} aria-label="Next project"><SrlIcon name="right" /></button>
        </div>
      </div>

      <ul className="showcase-strip" ref={strip} aria-label="Project photos">
        {visible.map((project, i) => (
          <li key={project.src} className={i === index ? "is-current" : undefined}>
            <button
              type="button"
              onClick={(event) => { opener.current = event.currentTarget; setOpen(i); }}
              aria-label={`View larger: ${project.title}`}
            >
              <span className="showcase-frame">
                <Image src={project.src} alt={project.alt} fill sizes="(max-width: 700px) 86vw, 60vw" />
              </span>
              <span className="showcase-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            </button>
            <div className="showcase-caption">
              <small>{project.category}</small>
              <strong>{project.title}</strong>
              <span>Bakersfield, CA</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="showcase-dots" aria-hidden="true">
        {visible.map((project, i) => (
          <button key={project.src} type="button" tabIndex={-1} className={i === index ? "is-on" : undefined} onClick={() => scrollTo(i)} />
        ))}
      </div>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label={current ? current.title : "Project photo"}
        onClose={() => { setOpen(null); opener.current?.focus(); }}
        onClick={(event) => { if (event.target === event.currentTarget) setOpen(null); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
      >
        {current ? (
          <figure>
            <div className="lightbox-image">
              <Image src={current.src} alt={current.alt} fill sizes="90vw" />
            </div>
            <figcaption>
              <span><small>{current.category}</small>{current.title}</span>
              <span>{(open ?? 0) + 1} / {visible.length}</span>
            </figcaption>
          </figure>
        ) : null}
        <button type="button" className="lightbox-close" onClick={() => setOpen(null)} aria-label="Close">✕</button>
        <button type="button" className="lightbox-nav prev" onClick={() => step(-1)} aria-label="Previous photo"><SrlIcon name="left" /></button>
        <button type="button" className="lightbox-nav next" onClick={() => step(1)} aria-label="Next photo"><SrlIcon name="right" /></button>
      </dialog>
    </div>
  );
}
