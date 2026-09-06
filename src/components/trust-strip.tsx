import { credentials, site } from "@/lib/site";

const icons = [
  <svg key="license" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
    <path strokeLinecap="round" d="M9 12l2 2 4-4M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,
  <svg key="class" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
    <path strokeLinecap="round" d="M7 21h10M12 3v18M8 7h8" />
  </svg>,
  <svg key="bonded" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
    <path strokeLinecap="round" d="M5 13l4 4L19 7" />
  </svg>,
  <svg key="estimate" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
    <path strokeLinecap="round" d="M9 12h6M9 16h6M7 4h10a2 2 0 012 2v14l-4-2-4 2-4-2-4 2V6a2 2 0 012-2z" />
  </svg>,
];

export function TrustStrip() {
  return (
    <div className="border-y border-[var(--line)] bg-white" aria-label="Credentials">
      <div className="container-main">
        <div className="grid gap-6 py-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {credentials.map((c, i) => (
            <div key={c.label} className="trust-item">
              <span className="trust-icon">{icons[i]}</span>
              <div>
                {c.label === "State license" ? (
                  <a
                    href={site.licenseVerifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-base text-ink hover:text-brand"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="font-display text-base text-ink">{c.value}</p>
                )}
                <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">{c.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
