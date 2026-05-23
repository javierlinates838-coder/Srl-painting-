import { credentials, site } from "@/lib/site";

const tickerItems = [
  ...credentials.map((c) => `${c.value}`),
  site.instagramHandle,
  "Kern County · Los Angeles",
  "Prep · Paint · Perfect",
];

export function TrustStrip() {
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div className="relative overflow-hidden border-y border-black/6 bg-white">
      <div className="container-main grid grid-cols-2 gap-px bg-black/6 md:grid-cols-4">
        {credentials.map((c) => (
          <div
            key={c.label}
            className="flex flex-col items-center justify-center bg-white px-4 py-5 text-center sm:py-6"
          >
            <p className="font-display text-sm font-bold text-brand sm:text-base">{c.value}</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 sm:text-[11px]">
              {c.label}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-black/6 bg-paper py-3">
        <div className="overflow-hidden">
          <div className="marquee-track items-center gap-10 px-4">
            {doubled.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex shrink-0 items-center gap-10 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500"
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-brand/40" aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
