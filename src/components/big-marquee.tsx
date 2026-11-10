// Oversized outlined type that drifts across the page. Decorative.
export function BigMarquee({ words }: { words: string[] }) {
  return (
    <div className="big-marquee" aria-hidden="true">
      <div className="big-marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy}>
            {words.map((word, i) => (
              <span key={word} className={i % 2 ? "is-solid" : undefined}>{word}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
