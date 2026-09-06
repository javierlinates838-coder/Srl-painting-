"use client";

import Link from "next/link";
import { useState } from "react";
import {
  estimatorConditions,
  estimatorSizes,
  estimatorTiming,
  estimatorTypes,
} from "@/lib/site";
import { useQuote } from "./quote-context";
import { Reveal } from "./reveal";

type EstimatorState = {
  type: string;
  size: string;
  condition: string;
  timing: string;
};

function buildSummary(state: EstimatorState): string {
  const parts: string[] = [];
  if (state.type) parts.push(estimatorTypes.find((t) => t.id === state.type)?.label ?? state.type);
  if (state.size) parts.push(`${estimatorSizes.find((s) => s.id === state.size)?.label ?? state.size} project`);
  if (state.condition) {
    const cond = estimatorConditions.find((c) => c.id === state.condition);
    parts.push(cond?.id === "heavy" ? "Surface preparation required" : cond?.hint ?? state.condition);
  }
  if (state.timing) parts.push(`Desired timing: ${estimatorTiming.find((t) => t.id === state.timing)?.label ?? state.timing}`);
  return parts.join("\n");
}

export function ProjectEstimator() {
  const { setDraft } = useQuote();
  const [state, setState] = useState<EstimatorState>({ type: "", size: "", condition: "", timing: "" });
  const [showSummary, setShowSummary] = useState(false);

  function update(field: keyof EstimatorState, value: string) {
    setState((s) => ({ ...s, [field]: value }));
    setShowSummary(false);
  }

  function generate() {
    const summary = buildSummary(state);
    setDraft({ estimatorSummary: summary, service: state.type ? estimatorTypes.find((t) => t.id === state.type)?.label ?? "" : "" });
    setShowSummary(true);
  }

  const complete = state.type && state.size && state.condition && state.timing;

  return (
    <section id="estimator" className="section-pad-sm bg-stone border-t border-[var(--line)]" aria-labelledby="estimator-heading">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="meta-brand">Build your project</p>
            <h2 id="estimator-heading" className="display-md mt-4 text-ink">Your project summary.</h2>
            <p className="body-text mt-4">Not a price estimate — a quick way to describe your project before you reach out.</p>
          </Reveal>

          <Reveal delay={2}>
            <div>
              <p className="field-label">Project type</p>
              <div className="mt-2">
                {estimatorTypes.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className={`estimator-option ${state.type === t.id ? "is-selected" : ""}`}
                    onClick={() => update("type", t.id)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <p className="field-label mt-8">Approximate size</p>
              <div className="mt-2">
                {estimatorSizes.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`estimator-option ${state.size === s.id ? "is-selected" : ""}`}
                    onClick={() => update("size", s.id)}
                  >
                    <span>{s.label}</span>
                    <span className="block text-xs text-ink-light font-normal mt-0.5">{s.hint}</span>
                  </button>
                ))}
              </div>

              <p className="field-label mt-8">Current condition</p>
              <div className="mt-2">
                {estimatorConditions.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className={`estimator-option ${state.condition === c.id ? "is-selected" : ""}`}
                    onClick={() => update("condition", c.id)}
                  >
                    <span>{c.label}</span>
                    <span className="block text-xs text-ink-light font-normal mt-0.5">{c.hint}</span>
                  </button>
                ))}
              </div>

              <p className="field-label mt-8">Desired timing</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {estimatorTiming.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className={`btn btn-sm ${state.timing === t.id ? "btn-primary" : "btn-line"}`}
                    onClick={() => update("timing", t.id)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                disabled={!complete}
                onClick={generate}
                className="btn btn-primary mt-10 w-full disabled:opacity-40"
              >
                Build Summary
              </button>

              {showSummary && (
                <div className="mt-8 border-t border-[var(--line)] pt-8">
                  <p className="meta-brand">Your project summary</p>
                  <pre className="mt-4 whitespace-pre-wrap font-body text-sm text-ink-muted">{buildSummary(state)}</pre>
                  <Link href="#contact" className="btn btn-primary mt-6 w-full">
                    Request an Estimate
                    <svg className="btn-arrow h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                      <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
