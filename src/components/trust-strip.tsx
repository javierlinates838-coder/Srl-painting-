import { credentials } from "@/lib/site";

export function TrustStrip() {
  return (
    <div className="relative border-y border-black/6 bg-white">
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
    </div>
  );
}
