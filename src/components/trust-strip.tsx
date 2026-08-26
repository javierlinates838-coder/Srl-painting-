import { credentials, site } from "@/lib/site";

const icons = [
  <svg key="0" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" d="M9 12l2 2 4-4M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,
  <svg key="1" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" d="M7 21h10M12 3v18M8 7h8" />
  </svg>,
  <svg key="2" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" d="M5 13l4 4L19 7" />
  </svg>,
  <svg key="3" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm8.9 4a9 9 0 11-17.8 0 9 9 0 0117.8 0z" />
  </svg>,
];

export function TrustStrip() {
  return (
    <div className="relative overflow-hidden border-y border-black/6 bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-tint/40 via-transparent to-brand-tint/40" aria-hidden />
      <div className="container-main relative">
        <div className="grid grid-cols-2 gap-px bg-black/5 md:grid-cols-4">
          {credentials.map((c, i) => (
            <div
              key={c.label}
              className="group flex flex-col items-center justify-center bg-white px-4 py-6 text-center transition-colors hover:bg-brand-tint/30 sm:py-7"
            >
              <span className="icon-box mb-3 h-10 w-10 transition-transform group-hover:scale-110">{icons[i]}</span>
              {c.label === "License" ? (
                <a
                  href={site.licenseVerifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-sm font-bold text-brand underline-offset-2 hover:underline sm:text-base"
                >
                  {c.value}
                </a>
              ) : (
                <p className="font-display text-sm font-bold text-brand sm:text-base">{c.value}</p>
              )}
              <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 sm:text-[11px]">
                {c.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
