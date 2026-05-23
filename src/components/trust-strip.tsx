import { credentials, site } from "@/lib/site";

const icons = [
  <svg key="0" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" d="M9 12l2 2 4-4M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,
  <svg key="1" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" d="M7 21h10M12 3v18M8 7h8" />
  </svg>,
  <svg key="2" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" d="M5 13l4 4L19 7" />
  </svg>,
  <svg key="3" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm8.9 4a9 9 0 11-17.8 0 9 9 0 0117.8 0z" />
  </svg>,
];

const tickerItems = [
  ...credentials.map((c) => c.value),
  site.instagramHandle,
  "Kern County · Los Angeles",
  "Prep · Paint · Perfect",
];

export function TrustStrip() {
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div className="relative overflow-hidden border-y border-black/6 bg-white">
      <div className="container-main">
        <div className="grid grid-cols-2 gap-px bg-black/6 md:grid-cols-4">
          {credentials.map((c, i) => (
            <div
              key={c.label}
              className="group flex flex-col items-center justify-center bg-white px-4 py-5 text-center transition hover:bg-brand-tint/30 sm:py-6"
            >
              <span className="icon-box mb-2 h-8 w-8 !shadow-none transition group-hover:scale-105">{icons[i]}</span>
              <p className="font-display text-sm font-bold text-brand sm:text-base">{c.value}</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 sm:text-[11px]">
                {c.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-black/6 bg-paper py-3.5">
        <div className="marquee-wrap">
          <div className="marquee-track items-center gap-10 px-4">
            {doubled.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex shrink-0 items-center gap-10 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500"
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-brand/50" aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
