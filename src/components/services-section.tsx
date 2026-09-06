"use client";

import { useCallback, useId, useRef, useState } from "react";
import { services } from "@/lib/site";
import { useQuote } from "./quote-context";
import { ServiceSurface } from "./service-surface";

export function ServicesSection() {
  const { setField } = useQuote();
  const [active, setActive] = useState(0);
  const [contentKey, setContentKey] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const baseId = useId();

  const current = services[active];

  const selectService = useCallback(
    (index: number) => {
      if (index === active) return;
      setActive(index);
      setContentKey((k) => k + 1);
      setField("service", services[index].short);
    },
    [active, setField],
  );

  function scrollToEstimate() {
    setField("service", current.short);
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  }

  function onKeyDown(e: React.KeyboardEvent, index: number) {
    let next = index;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      next = (index + 1) % services.length;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      next = (index - 1 + services.length) % services.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      next = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      next = services.length - 1;
    } else {
      return;
    }
    selectService(next);
    const btn = listRef.current?.querySelector<HTMLButtonElement>(
      `[data-service-index="${next}"]`,
    );
    btn?.focus();
  }

  const panelId = `${baseId}-panel`;

  return (
    <section
      id="services"
      className="services"
      aria-labelledby="services-heading"
    >
      <div className="container-main services-inner">
        <header className="services-header">
          <p className="services-eyebrow">Services</p>
          <h2 id="services-heading" className="services-intro">
            Painting, by application.
          </h2>
        </header>

        <div className="services-stage">
          <div className="services-primary">
            <div
              key={contentKey}
              id={panelId}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${active}`}
              className="services-detail"
            >
              <h3 className="services-active-title">{current.title}</h3>
              <p className="services-statement">{current.statement}</p>
              <p className="services-description">{current.description}</p>

              <div className="services-specimen">
                <ServiceSurface serviceId={current.id} />
              </div>

              <div className="services-scope">
                <p className="services-scope-label">{current.scopeLabel}</p>
                <ul className="services-scope-list">
                  {current.scope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                className="btn btn-primary services-cta"
                onClick={scrollToEstimate}
              >
                Get estimate
                <svg
                  className="btn-arrow h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={listRef}
            className="services-index"
            role="tablist"
            aria-label="Painting services"
          >
            {services.map((service, i) => {
              const isActive = active === i;
              const tabId = `${baseId}-tab-${i}`;
              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  id={tabId}
                  data-service-index={i}
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive ? 0 : -1}
                  className={`services-index-btn${isActive ? " is-active" : ""}`}
                  onClick={() => selectService(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                >
                  <span className="services-index-num">{service.index}</span>
                  <span className="services-index-title">{service.title}</span>
                  <span className="services-index-marker" aria-hidden />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
