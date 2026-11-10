"use client";

import Image from "next/image";
import { useState } from "react";
import { services } from "@/lib/site";
import { StorefrontArt } from "./room-illustrations";
import { SrlIcon, type IconName } from "./srl-icon";

type Panel = {
  id: string;
  num: string;
  icon: IconName;
  title: string;
  short: string;
  text: string;
  tags: readonly string[];
  image?: string;
  alt?: string;
};

const panels: Panel[] = [
  ...services.map((s) => ({ ...s, short: s.id === "cabinets" ? "Cabinets" : s.title.replace(" painting", "") })),
  {
    id: "commercial",
    num: "04",
    icon: "check",
    title: "Commercial painting",
    short: "Commercial",
    text: "Offices, storefronts, and business spaces. We plan the scope and schedule around your hours so your doors stay open.",
    tags: ["Offices", "Storefronts", "Flexible hours", "Repaints"],
  },
];

// Four doors: the one you hover, focus or tap swings open to show the detail.
export function ServicePanels() {
  const [active, setActive] = useState(0);
  return (
    <div className="panels" data-reveal>
      {panels.map((panel, index) => {
        const open = index === active;
        return (
          <article key={panel.id} className={open ? "panel is-open" : "panel"} onMouseEnter={() => setActive(index)}>
            <div className="panel-media" aria-hidden={panel.image ? undefined : true}>
              {panel.image ? (
                <Image src={panel.image} alt={panel.alt ?? ""} fill sizes="(max-width: 900px) 100vw, 60vw" />
              ) : (
                <StorefrontArt />
              )}
            </div>
            <h3 className="panel-head">
              <button type="button" aria-expanded={open} aria-controls={`panel-${panel.id}`} onClick={() => setActive(index)} onFocus={() => setActive(index)}>
                <span className="panel-num">{panel.num}</span>
                <span className="panel-short">{panel.short}</span>
              </button>
            </h3>
            <div className="panel-body" id={`panel-${panel.id}`} inert={!open}>
              <span className="panel-icon"><SrlIcon name={panel.icon} /></span>
              <p className="panel-title">{panel.title}</p>
              <p>{panel.text}</p>
              <ul className="tags">
                {panel.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <a href="#contact" className="button primary">
                Get a quote <SrlIcon name="arrow" />
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}
