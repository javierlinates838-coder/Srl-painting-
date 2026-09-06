"use client";

import Image from "next/image";
import { useState } from "react";
import { colorMoods, site } from "@/lib/site";

/**
 * SRL Color Explorer — architecture ready for future assets.
 * Hidden until site.colorExplorerEnabled is true and real room/swatch imagery exists.
 */
export function ColorExplorer() {
  const [moodId, setMoodId] = useState<(typeof colorMoods)[number]["id"]>(colorMoods[0].id);

  if (!site.colorExplorerEnabled) return null;

  const active = colorMoods.find((m) => m.id === moodId) ?? colorMoods[0];

  return (
    <section className="section-pad bg-ivory" aria-label="Color explorer">
      <div className="container-main">
        <p className="meta-brand">Color</p>
        <h2 className="editorial-md mt-4 text-ink">SRL color explorer</h2>
        <p className="body-sm mt-3 max-w-md">Mood-based samples from photographed SRL projects — not AI recoloring.</p>

        <div className="mt-10 flex flex-wrap gap-3">
          {colorMoods.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMoodId(m.id)}
              className={`flex items-center gap-2 border px-4 py-2 text-sm ${active.id === m.id ? "border-brand text-brand" : "border-[var(--line)]"}`}
            >
              <span className="h-4 w-4 rounded-full" style={{ background: m.swatch }} aria-hidden />
              {m.label}
            </button>
          ))}
        </div>

        <div className="relative mt-8 aspect-[16/9] max-w-3xl overflow-hidden">
          <Image src={active.sample} alt={`${active.label} mood sample`} fill className="object-cover" sizes="800px" />
          <div className="absolute inset-0" style={{ background: `${active.swatch}33` }} aria-hidden />
        </div>
      </div>
    </section>
  );
}
