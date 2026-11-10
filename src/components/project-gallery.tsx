"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { projects, type ProjectCategory } from "@/lib/site";
import { SrlIcon } from "./srl-icon";

const filters: ("All" | ProjectCategory)[] = ["All", "Exterior", "Interior", "Cabinets", "Outdoor"];

// Ragged brush-stroke silhouette used to mask every photo in the strip.
// A plain CSS polygon: far cheaper to scroll than an SVG clip-path reference.
const brush =
  "polygon(2% 4.2%, 4.4% 6.2%, 6.8% 6.0%, 9.2% 4.0%, 11.6% 4.2%, 14% 4.3%, 16.4% 5.8%, 18.8% 4.2%, 21.2% 6.2%, 23.6% 5.5%, 26% 7.0%, 28.4% 6.0%, 30.8% 2.3%, 33.2% 2.8%, 35.6% 2.2%, 38% 3.0%, 40.4% 6.0%, 42.8% 5.8%, 45.2% 3.3%, 47.6% 6.3%, 50% 4.5%, 52.4% 7.0%, 54.8% 6.2%, 57.2% 7.0%, 59.6% 5.8%, 62% 4.7%, 64.4% 4.8%, 66.8% 4.0%, 69.2% 6.7%, 71.6% 6.0%, 74% 4.3%, 76.4% 3.2%, 78.8% 5.7%, 81.2% 4.8%, 83.6% 5.0%, 86% 5.3%, 88.4% 6.3%, 90.8% 6.8%, 93.2% 4.2%, 95.6% 5.7%, 98% 3.8%, 98.4% 14.0%, 99.8% 23.3%, 97.2% 32.0%, 99.5% 41.0%, 97.6% 50.0%, 98.7% 59.0%, 97% 67.7%, 98.9% 76.7%, 96.5% 85.7%, 99.6% 94.7%, 98% 93.8%, 95.6% 96.8%, 93.2% 95.8%, 90.8% 93.8%, 88.4% 92.8%, 86% 94.5%, 83.6% 95.2%, 81.2% 93.8%, 78.8% 96.8%, 76.4% 97.0%, 74% 95.2%, 71.6% 93.3%, 69.2% 96.5%, 66.8% 94.3%, 64.4% 96.7%, 62% 94.5%, 59.6% 95.3%, 57.2% 93.3%, 54.8% 95.3%, 52.4% 97.2%, 50% 96.3%, 47.6% 94.3%, 45.2% 95.2%, 42.8% 96.2%, 40.4% 93.3%, 38% 94.3%, 35.6% 93.3%, 33.2% 95.3%, 30.8% 96.3%, 28.4% 95.5%, 26% 97.2%, 23.6% 94.2%, 21.2% 93.5%, 18.8% 95.8%, 16.4% 97.0%, 14% 95.0%, 11.6% 97.0%, 9.2% 94.0%, 6.8% 95.8%, 4.4% 94.3%, 2% 96.5%, 1.8% 86.7%, 3.2% 77.7%, 0.6% 68.7%, 2.8% 59.7%, 1% 50.7%, 3.4% 41.7%, 1.4% 32.7%, 2.2% 23.7%, 0.2% 14.7%, 3% 5.7%)";

export function ProjectGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const [index, setIndex] = useState(0);
  const strip = useRef<HTMLUListElement>(null);
  const bubble = useRef<HTMLSpanElement>(null);
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
    <div className="showcase" style={{ "--brush": brush } as CSSProperties}>
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

      <span className="showcase-bubble" ref={bubble} aria-hidden="true">View</span>
      <ul className="showcase-strip" ref={strip} aria-label="Project photos"
        onPointerMove={(event) => {
          const el = bubble.current;
          if (!el || event.pointerType !== "mouse") return;
          el.style.translate = `${event.clientX}px ${event.clientY}px`;
          el.classList.toggle("is-on", (event.target as HTMLElement).closest("button") !== null);
        }}
        onPointerLeave={() => bubble.current?.classList.remove("is-on")}>
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
