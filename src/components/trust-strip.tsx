import { credentials, site } from "@/lib/site";

export function TrustStrip() {
  return (
    <div className="border-y border-[var(--ios-separator)] bg-surface">
      <div className="container-main">
        <div className="grid grid-cols-2 gap-px bg-[var(--ios-separator)] md:grid-cols-4">
          {credentials.map((c) => (
            <div key={c.label} className="bg-surface px-4 py-5 text-center">
              <p className="ios-caption uppercase tracking-wide">{c.label}</p>
              {c.label === "State license" ? (
                <a
                  href={site.licenseVerifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ios-headline mt-1 inline-block text-ios-tint"
                >
                  {c.value}
                </a>
              ) : (
                <p className="ios-headline mt-1">{c.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
