// A paint stripe under the header that a tiny roller lays down as you scroll.
// Driven by CSS scroll timelines, so it runs off the main thread (and simply
// stays hidden in browsers without support).
export function ScrollPaint() {
  return (
    <div className="scroll-paint" aria-hidden="true">
      <span className="scroll-paint-fill" />
      <span className="scroll-paint-rail">
        <svg className="scroll-paint-roller" viewBox="0 0 28 16">
          <rect x="1" y="1" width="16" height="8" rx="3" fill="#e0213f" />
          <path d="M17 5h6v8" fill="none" stroke="#c9c9cf" strokeWidth="2" />
          <rect x="20" y="10" width="6" height="6" rx="2" fill="#fff" />
        </svg>
      </span>
    </div>
  );
}
