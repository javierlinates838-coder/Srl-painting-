import { credentials, site } from "@/lib/site";

export function TrustStrip() {
  return (
    <div className="border-b border-black/8 bg-white">
      <div className="container-main">
        <ul className="grid grid-cols-2 md:grid-cols-4">
          {credentials.map((c, i) => (
            <li
              key={c.label}
              className={`flex flex-col justify-center px-4 py-6 sm:px-6 sm:py-7 ${
                i > 0 ? "border-l border-black/8" : ""
              } ${i === 2 ? "border-t border-black/8 md:border-t-0" : ""} ${
                i === 3 ? "border-t border-black/8 md:border-t-0" : ""
              }`}
            >
              <p className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">{c.label}</p>
              {c.label === "License" ? (
                <a
                  href={site.licenseVerifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display mt-1.5 text-[15px] font-bold text-brand underline-offset-2 hover:underline sm:text-base"
                >
                  {c.value}
                </a>
              ) : (
                <p className="font-display mt-1.5 text-[15px] font-bold text-ink sm:text-base">{c.value}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
