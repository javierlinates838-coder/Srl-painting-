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

export function TrustStrip() {
  return (
    <div className="border-y border-black/6 bg-white">
      <div className="container-main">
        <div className="grid grid-cols-2 gap-px bg-black/6 md:grid-cols-4">
          {credentials.map((c, i) => (
            <div key={c.label} className="flex flex-col items-center justify-center bg-white px-4 py-5 text-center sm:py-6">
              <span className="icon-box mb-2 h-8 w-8">{icons[i]}</span>
              {i === 0 ? (
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
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 sm:text-[11px]">
                {c.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
