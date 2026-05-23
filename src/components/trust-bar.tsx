import { trustBadges } from "@/lib/site";

export function TrustBar() {
  return (
    <div className="border-b border-ink/8 bg-white py-4">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 lg:px-10">
        {trustBadges.map((badge) => (
          <div key={badge.label} className="flex items-center gap-2.5 text-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-maroon/10 text-maroon">
              <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span>
              <strong className="font-semibold text-ink">{badge.label}</strong>
              <span className="text-ink-muted"> · {badge.detail}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
