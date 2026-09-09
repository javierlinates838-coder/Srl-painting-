"use client";

import { useRef, useState } from "react";
import { site } from "@/lib/site";
import { SrlIcon } from "./srl-icon";

const angi = "https://www.angi.com/companylist/us/ca/bakersfield/srl-painting-reviews-1.htm";
// Selected, verbatim excerpts. Angi's listing matches SRL's license #1108313.
// Checked September 9, 2026. These are individual ratings, not an aggregate.
const reviews = [
  {
    name: "Michael Moreno", initials: "MM",
    quote: "Steven did an AMAZING job!! My whole house was painted and it looks and feels like a brand new home.",
    source: "Google · shared by SRL on Instagram", href: site.googleReviews,
  },
  {
    name: "Cynthia C.", initials: "CC",
    quote: "The level of professionalism exceeds expectations.",
    source: "Angi · November 2023", href: angi,
  },
  {
    name: "Kathleen T.", initials: "KT",
    quote: "They were very friendly, efficient, and fair.",
    source: "Angi · November 2023", href: angi,
  },
  {
    name: "Aaron J.", initials: "AJ",
    quote: "We will definitely be using SRL for future painting needs.",
    source: "Angi · November 2023", href: angi,
  },
];

export function ReviewCarousel() {
  const [active, setActive] = useState(0);
  const touch = useRef<{ x: number; y: number } | null>(null);
  function move(delta: number) {
    setActive((current) => (current + delta + reviews.length) % reviews.length);
  }
  return (
    <div className="review-carousel" role="region" aria-roledescription="carousel" aria-label="Selected customer reviews">
      <div className="review-window"
        onTouchStart={(event) => { const point = event.touches[0]; touch.current = { x: point.clientX, y: point.clientY }; }}
        onTouchCancel={() => { touch.current = null; }}
        onTouchEnd={(event) => {
          if (!touch.current) return;
          const point = event.changedTouches[0];
          const dx = point.clientX - touch.current.x;
          const dy = point.clientY - touch.current.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
          touch.current = null;
        }}>
        <div className="review-track" style={{ transform: `translateX(-${active * 100}%)` }}>
          {reviews.map((review, index) => (
            <div key={review.name} className="review-slide" role="group" aria-roledescription="slide"
              aria-label={`${index + 1} of ${reviews.length}`} aria-hidden={index !== active} inert={index !== active}>
              <figure className="testimonial-card">
                <div className="testimonial-top">
                  <span className="testimonial-stars" role="img" aria-label="5 out of 5 stars"><span aria-hidden="true">★★★★★</span></span>
                  <span className="eyebrow">SELECTED REVIEW</span>
                </div>
                <blockquote>“{review.quote}”</blockquote>
                <figcaption><span className="review-avatar" aria-hidden="true">{review.initials}</span><span><strong>{review.name}</strong><small>{review.source}</small></span></figcaption>
                <div className="testimonial-footer"><span>Review excerpt</span><a href={review.href} target="_blank" rel="noopener noreferrer" aria-label={`Read ${review.name}'s review at its source (opens in a new tab)`}>Read original <SrlIcon name="arrow" /></a></div>
              </figure>
            </div>
          ))}
        </div>
      </div>
      <div className="review-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous review"><SrlIcon name="left" /></button>
        <div className="review-pagination">
          {reviews.map((review, index) => <button key={review.name} type="button" aria-label={`Show review by ${review.name}`} aria-pressed={index === active} onClick={() => setActive(index)}><span /></button>)}
        </div>
        <button type="button" onClick={() => move(1)} aria-label="Next review"><SrlIcon name="right" /></button>
      </div>
      <p className="review-position" aria-live="polite" aria-atomic="true">{active + 1} / {reviews.length} · {reviews[active].name}</p>
    </div>
  );
}
