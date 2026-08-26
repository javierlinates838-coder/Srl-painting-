import { credentials, site } from "@/lib/site";

export function TrustStrip() {
  return (
    <div className="border-b border-[var(--line)] bg-parchment">
      <div className="container-main">
        <dl className="grid grid-cols-2 divide-x divide-[var(--line-faint)] md:grid-cols-4">
          {credentials.map((c) => (
            <div key={c.label} className="px-4 py-6 text-center sm:py-7">
              <dt className="overline text-[0.625rem]">{c.label}</dt>
              <dd className="font-display mt-2 text-[1.0625rem] text-ink">
                {c.label === "State license" ? (
                  <a
                    href={site.licenseVerifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    {c.value}
                  </a>
                ) : (
                  c.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
