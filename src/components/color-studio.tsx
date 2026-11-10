"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { HouseDefs, HouseShapes } from "./house-illustration";
import { KitchenScene, LivingRoomScene } from "./room-illustrations";
import { SrlIcon } from "./srl-icon";

type Swatch = [name: string, hex: string];
type Part = { id: string; label: string; cssVar: string; swatches: Swatch[] };
type Scene = {
  id: string;
  label: string;
  service: string;
  sky: boolean;
  parts: Part[];
  presets: { name: string; colors: number[] }[];
  art: ReactNode;
};

// Studio names for illustration only; final colors are chosen with you in person.
const white: Swatch = ["Bright Stucco", "#f6f5f0"];
const midnight: Swatch = ["Midnight", "#1f2328"];
const charcoal: Swatch = ["Charcoal", "#3d4044"];
const bronze: Swatch = ["Bronze", "#5b4632"];
const linen: Swatch = ["Desert Linen", "#efe6d6"];
const fog: Swatch = ["Kern Fog", "#d6d6d0"];
const sage: Swatch = ["Sage Mist", "#b4bea2"];
const harbor: Swatch = ["Harbor Gray", "#8b9498"];
const teal: Swatch = ["Deep Teal", "#2e5b60"];
const navy: Swatch = ["Night Navy", "#27364a"];
const clay: Swatch = ["Tehachapi Clay", "#b9694a"];
const forest: Swatch = ["Sequoia Green", "#3f5a45"];

const scenes: Scene[] = [
  {
    id: "exterior",
    label: "Exterior",
    service: "Exterior",
    sky: true,
    parts: [
      { id: "body", label: "Body", cssVar: "--h-body", swatches: [linen, white, fog, ["Adobe Sand", "#d7c09b"], sage, harbor] },
      { id: "trim", label: "Trim", cssVar: "--h-trim", swatches: [midnight, white, charcoal, bronze, ["Oxblood", "#6c1a22"]] },
      { id: "door", label: "Front door", cssVar: "--h-door", swatches: [["SRL Red", "#b3122e"], midnight, ["Walnut", "#5b3a25"], teal, ["Goldenrod", "#c79a2c"]] },
      { id: "garage", label: "Garage", cssVar: "--h-garage", swatches: [midnight, white, charcoal, bronze, harbor] },
    ],
    presets: [
      { name: "Modern contrast", colors: [1, 0, 1, 0] },
      { name: "Desert warm", colors: [3, 3, 2, 3] },
      { name: "Soft sage", colors: [4, 1, 3, 1] },
      { name: "Bold & classic", colors: [0, 2, 0, 2] },
    ],
    art: (
      <>
        <HouseDefs id="studio" />
        <circle className="studio-sun" cx="560" cy="70" r="34" />
        <HouseShapes id="studio" />
      </>
    ),
  },
  {
    id: "living",
    label: "Living room",
    service: "Interior",
    sky: false,
    parts: [
      { id: "walls", label: "Walls", cssVar: "--r-wall", swatches: [white, linen, fog, sage, ["Soft Blush", "#e6cfc4"], harbor] },
      { id: "accent", label: "Accent wall", cssVar: "--r-accent", swatches: [navy, forest, clay, charcoal, teal, white] },
      { id: "trim", label: "Trim", cssVar: "--r-trim", swatches: [white, linen, charcoal, midnight] },
    ],
    presets: [
      { name: "Navy statement", colors: [0, 0, 0] },
      { name: "Warm clay", colors: [1, 2, 0] },
      { name: "Calm green", colors: [3, 1, 0] },
      { name: "Gallery white", colors: [0, 5, 3] },
    ],
    art: <LivingRoomScene />,
  },
  {
    id: "kitchen",
    label: "Kitchen cabinets",
    service: "Cabinet refurbishing",
    sky: false,
    parts: [
      { id: "uppers", label: "Uppers", cssVar: "--k-upper", swatches: [white, linen, fog, sage, navy, charcoal] },
      { id: "lowers", label: "Lowers", cssVar: "--k-lower", swatches: [navy, forest, charcoal, white, sage, ["Walnut", "#5b3a25"]] },
      { id: "walls", label: "Walls", cssVar: "--k-wall", swatches: [linen, white, fog, ["Soft Blush", "#e6cfc4"], sage] },
      { id: "hardware", label: "Hardware", cssVar: "--k-hw", swatches: [["Brushed Brass", "#c9a24b"], ["Matte Black", "#1b1b1d"], ["Satin Nickel", "#b9bcc0"]] },
    ],
    presets: [
      { name: "Two-tone navy", colors: [0, 0, 0, 0] },
      { name: "All white", colors: [0, 3, 2, 1] },
      { name: "Sage & brass", colors: [1, 4, 1, 0] },
      { name: "Moody green", colors: [2, 1, 1, 0] },
    ],
    art: <KitchenScene />,
  },
];

export function ColorStudio() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [partIndex, setPartIndex] = useState(0);
  const [choices, setChoices] = useState<number[][]>(scenes.map((s) => s.presets[0].colors));
  const [pulse, setPulse] = useState(0);

  const scene = scenes[sceneIndex];
  const choice = choices[sceneIndex];
  const part = scene.parts[Math.min(partIndex, scene.parts.length - 1)];
  const activePart = scene.parts.indexOf(part);
  const pick = (i: number) => scene.parts[i].swatches[choice[i]];
  const summary = scene.parts.map((p, i) => `${p.label}: ${pick(i)[0]}`).join(", ");

  function apply(next: number[]) {
    setChoices((all) => all.map((c, i) => (i === sceneIndex ? next : c)));
    setPulse((n) => n + 1);
  }
  function sendToEstimate() {
    window.dispatchEvent(new CustomEvent("srl:prefill", {
      detail: { service: scene.service, details: `Color idea from the Color Studio (${scene.label.toLowerCase()}): ${summary}.\n` },
    }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  const style = Object.fromEntries(scene.parts.map((p, i) => [p.cssVar, pick(i)[1]])) as CSSProperties;

  return (
    <div className="studio">
      <div className="studio-scenes" role="tablist" aria-label="What are we painting?">
        {scenes.map((s, i) => (
          <button key={s.id} type="button" role="tab" aria-selected={i === sceneIndex} id={`studio-scene-${s.id}`}
            aria-controls="studio-canvas" onClick={() => { setSceneIndex(i); setPartIndex(0); }}>
            {s.label}
          </button>
        ))}
      </div>

      <div className={scene.sky ? "studio-canvas has-sky" : "studio-canvas"} id="studio-canvas" role="tabpanel"
        aria-labelledby={`studio-scene-${scene.id}`} style={style}>
        <svg key={scene.id} className="studio-art" viewBox="0 0 640 420" role="img" aria-label={`${scene.label} preview. ${summary}.`}>
          {scene.art}
          {pulse > 0 ? (
            <g className="studio-splash" key={pulse} aria-hidden="true">
              <circle cx="320" cy="230" r="10" />
            </g>
          ) : null}
        </svg>
        <div className="studio-legend" aria-hidden="true">
          {scene.parts.map((p, i) => (
            <span key={p.id}><i style={{ background: pick(i)[1] }} />{pick(i)[0]}</span>
          ))}
        </div>
      </div>

      <div className="studio-panel">
        <div className="studio-presets" role="group" aria-label="Color schemes">
          {scene.presets.map((preset) => (
            <button key={preset.name} type="button" onClick={() => apply(preset.colors)}
              aria-pressed={preset.colors.every((c, i) => c === choice[i])}>
              <span className="preset-dots" aria-hidden="true">
                {scene.parts.map((p, i) => <i key={p.id} style={{ background: p.swatches[preset.colors[i]][1] }} />)}
              </span>
              {preset.name}
            </button>
          ))}
        </div>

        <div className="studio-tabs" role="group" aria-label="Surface to paint">
          {scene.parts.map((p, i) => (
            <button key={p.id} type="button" aria-pressed={i === activePart} onClick={() => setPartIndex(i)}>
              <i style={{ background: pick(i)[1] }} aria-hidden="true" />{p.label}
            </button>
          ))}
        </div>

        <div className="studio-chips" role="group" aria-label={`${part.label} colors`}>
          {part.swatches.map((swatch, index) => (
            <button key={swatch[0] + part.id + scene.id} type="button" className="chip" aria-pressed={choice[activePart] === index}
              onClick={() => apply(choice.map((c, i) => (i === activePart ? index : c)))}>
              <span className="chip-color" style={{ background: swatch[1] }} />
              <span className="chip-name">{swatch[0]}</span>
              <span className="chip-hex">{swatch[1].toUpperCase()}</span>
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
