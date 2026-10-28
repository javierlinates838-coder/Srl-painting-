"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projects, type ProjectCategory } from "@/lib/site";
import { SrlIcon } from "./srl-icon";

const filters: ("All" | ProjectCategory)[] = ["All", "Exterior", "Interior", "Cabinets", "Outdoor"];

export function ProjectGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (open !== null && !element.open) element.showModal();
    if (open === null && element.open) element.close();
  }, [open]);

  function step(delta: number) {
    setOpen((current) => current === null ? null : (current + delta + visible.length) % visible.length);
  }
  const current = open === null ? null : visible[open];

  return (
    <div className="gallery">
      <div className="gallery-filters" role="group" aria-label="Filter projects">
        {filters.map((name) => (
          <button key={name} type="button" aria-pressed={filter === name} onClick={() => setFilter(name)}>
            {name}
          </button>
        ))}
      </div>
      <ul className="gallery-grid">
        {visible.map((project, index) => (
          <li key={project.src} className={project.tall ? "is-tall" : undefined}>
            <button
              type="button"
              onClick={(event) => { opener.current = event.currentTarget; setOpen(index); }}
              aria-label={`View larger: ${project.title}`}
            >
              <Image src={project.src} alt={project.alt} fill sizes="(max-width: 700px) 50vw, 33vw" />
              <span className="gallery-caption">
                <small>{project.category}</small>
                {project.title}
              </span>
            </button>
          </li>
        ))}
      </ul>
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
