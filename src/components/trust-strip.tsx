import { credentials, site } from "@/lib/site";

export function TrustStrip() {
  return (
    <div className="border-y border-[var(--line)] bg-white">
      <div className="container-main">
        <ul className="grid grid-cols-2 divide-x divide-y divide-[var(--line-soft)] md:grid-cols-4 md:divide-y-0">
          {credentials.map((c) => (
            <li key={c.label} className="flex flex-col items-center justify-center px-4 py-6 text-center sm:py-7">
              {c.label === "License" ? (
                <a
                  href={site.licenseVerifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-[15px] font-bold text-brand underline-offset-2 hover:underline sm:text-base"
                >
                  {c.value}
                </a>
              ) : (
                <p className="font-display text-[15px] font-bold text-ink sm:text-base">{c.value}</p>
              )}
              <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted sm:text-[11px]">
                {c.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
