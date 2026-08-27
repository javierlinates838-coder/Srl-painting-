import { credentials, site } from "@/lib/site";

export function TrustStrip() {
  return (
    <div className="bg-brand-band py-1" aria-label="Credentials">
      <div className="container-main">
        <div className="grid grid-cols-2 gap-px md:grid-cols-4">
          {credentials.map((c) => (
            <div key={c.label} className="px-4 py-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/70">{c.label}</p>
              {c.label === "State license" ? (
                <a
                  href={site.licenseVerifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ios-headline mt-1 inline-block text-white hover:underline"
                >
                  {c.value}
                </a>
              ) : (
                <p className="ios-headline mt-1 text-white">{c.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
