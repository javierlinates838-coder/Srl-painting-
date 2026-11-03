"use client";

import { useState, type CSSProperties } from "react";
import { HouseDefs, HouseShapes } from "./house-illustration";
import { SrlIcon } from "./srl-icon";

type Part = "body" | "trim" | "door" | "garage";
type Swatch = { name: string; hex: string };

// Studio names for illustration only; final colors are chosen with you in person.
const swatches: Record<Part, Swatch[]> = {
  body: [
    { name: "Desert Linen", hex: "#efe6d6" },
    { name: "Bright Stucco", hex: "#f6f5f0" },
    { name: "Kern Fog", hex: "#d6d6d0" },
    { name: "Adobe Sand", hex: "#d7c09b" },
    { name: "Sage Mist", hex: "#b4bea2" },
    { name: "Harbor Gray", hex: "#8b9498" },
  ],
  trim: [
    { name: "Midnight", hex: "#1f2328" },
    { name: "Bright Stucco", hex: "#f6f5f0" },
    { name: "Charcoal", hex: "#3d4044" },
    { name: "Bronze", hex: "#5b4632" },
    { name: "Oxblood", hex: "#6c1a22" },
  ],
  door: [
    { name: "SRL Red", hex: "#b3122e" },
    { name: "Midnight", hex: "#1f2328" },
    { name: "Walnut", hex: "#5b3a25" },
    { name: "Deep Teal", hex: "#2e5b60" },
    { name: "Goldenrod", hex: "#c79a2c" },
  ],
  garage: [
    { name: "Midnight", hex: "#1f2328" },
    { name: "Bright Stucco", hex: "#f6f5f0" },
    { name: "Charcoal", hex: "#3d4044" },
    { name: "Bronze", hex: "#5b4632" },
    { name: "Harbor Gray", hex: "#8b9498" },
  ],
};

const presets: { name: string; colors: Record<Part, number> }[] = [
  { name: "Modern contrast", colors: { body: 1, trim: 0, door: 1, garage: 0 } },
  { name: "Desert warm", colors: { body: 3, trim: 3, door: 2, garage: 3 } },
  { name: "Soft sage", colors: { body: 4, trim: 1, door: 3, garage: 1 } },
  { name: "Bold & classic", colors: { body: 0, trim: 2, door: 0, garage: 2 } },
];

const parts: { id: Part; label: string }[] = [
  { id: "body", label: "Body" },
  { id: "trim", label: "Trim" },
  { id: "door", label: "Front door" },
  { id: "garage", label: "Garage" },
];

export function ColorStudio() {
  const [part, setPart] = useState<Part>("body");
  const [choice, setChoice] = useState<Record<Part, number>>(presets[0].colors);
  const [pulse, setPulse] = useState(0);
  const pick = (p: Part) => swatches[p][choice[p]];

  function apply(next: Record<Part, number>) {
    setChoice(next);
    setPulse((n) => n + 1);
  }
  function sendToEstimate() {
    const summary = parts.map((p) => `${p.label}: ${pick(p.id).name}`).join(", ");
    window.dispatchEvent(new CustomEvent("srl:prefill", {
      detail: { service: "Exterior", details: `Color idea from the Color Studio: ${summary}.\n` },
    }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  const style = {
    "--h-body": pick("body").hex,
    "--h-trim": pick("trim").hex,
    "--h-door": pick("door").hex,
    "--h-garage": pick("garage").hex,
  } as CSSProperties;

  return (
    <div className="studio">
      <div className="studio-canvas" style={style}>
        <svg viewBox="0 0 640 420" role="img" aria-label={`House preview. ${parts.map((p) => `${p.label}: ${pick(p.id).name}`).join(". ")}.`}>
          <HouseDefs id="studio" />
          <circle className="studio-sun" cx="560" cy="70" r="34" />
          <HouseShapes id="studio" />
          {pulse > 0 ? (
            <g className="studio-splash" key={pulse} aria-hidden="true">
              <circle cx="320" cy="250" r="10" />
            </g>
          ) : null}
        </svg>
        <div className="studio-legend" aria-hidden="true">
          {parts.map((p) => (
            <span key={p.id}><i style={{ background: pick(p.id).hex }} />{pick(p.id).name}</span>
          ))}
        </div>
      </div>

      <div className="studio-panel">
        <div className="studio-presets" role="group" aria-label="Color schemes">
          {presets.map((preset) => (
            <button key={preset.name} type="button" onClick={() => apply(preset.colors)}
              aria-pressed={parts.every((p) => preset.colors[p.id] === choice[p.id])}>
              <span className="preset-dots" aria-hidden="true">
                {parts.map((p) => <i key={p.id} style={{ background: swatches[p.id][preset.colors[p.id]].hex }} />)}
              </span>
              {preset.name}
            </button>
          ))}
        </div>

        <div className="studio-tabs" role="tablist" aria-label="Part of the house">
          {parts.map((p) => (
            <button key={p.id} type="button" role="tab" aria-selected={part === p.id} id={`studio-tab-${p.id}`}
              aria-controls="studio-chips" onClick={() => setPart(p.id)}>
              <i style={{ background: pick(p.id).hex }} aria-hidden="true" />{p.label}
            </button>
          ))}
        </div>

        <div className="studio-chips" id="studio-chips" role="tabpanel" aria-labelledby={`studio-tab-${part}`}>
          {swatches[part].map((swatch, index) => (
            <button key={swatch.name + part} type="button" className="chip" aria-pressed={choice[part] === index}
              onClick={() => apply({ ...choice, [part]: index })}>
              <span className="chip-color" style={{ background: swatch.hex }} />
              <span className="chip-name">{swatch.name}</span>
              <span className="chip-hex">{swatch.hex.toUpperCase()}</span>
            </button>
          ))}
        </div>

        <button type="button" className="button primary studio-send" onClick={sendToEstimate}>
          Send this combo with my estimate <SrlIcon name="arrow" />
        </button>
        <p className="studio-note">A preview for inspiration. Screen colors vary, so we’ll look at real samples together on site.</p>
      </div>
    </div>
  );
}
