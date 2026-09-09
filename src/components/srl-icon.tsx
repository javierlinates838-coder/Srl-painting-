// Original SRL interface icon set. Decorative: visible labels name each control.
export type IconName =
  | "roller"
  | "home"
  | "cabinet"
  | "check"
  | "arrow"
  | "left"
  | "right"
  | "phone"
  | "instagram"
  | "message"
  | "pause"
  | "play";
export function SrlIcon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  const paths = {
    roller: (
      <>
        <rect x="3" y="3" width="14" height="7" rx="2" />
        <path d="M17 6h3v7l-8 2v3M10 18h4v4h-4zM6 6h5" />
      </>
    ),
    home: (
      <>
        <path d="m2 11 10-8 10 8M5 9v12h14V9M10 21v-7h4v7M16 4V2h3v4" />
      </>
    ),
    cabinet: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M12 3v18M4 8h16M9 12v3M15 12v3M7 5.5h2M15 5.5h2" />
      </>
    ),
    check: (
      <>
        <path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 19 19 5M5 5h14v14" />
      </>
    ),
    left: (
      <>
        <path d="M20 12H4m7-7-7 7 7 7" />
      </>
    ),
    right: (
      <>
        <path d="M4 12h16m-7-7 7 7-7 7" />
      </>
    ),
    phone: (
      <>
        <path d="m5 3 4 4-2 3c1 3 4 6 7 7l3-2 4 4c-2 5-8 2-13-3S0 5 5 3Z" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none" />
      </>
    ),
    message: (
      <>
        <path d="M5 3h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-9l-6 4v-4H3V5a2 2 0 0 1 2-2Z" />
        <path d="M7 8h10M7 12h7" />
      </>
    ),
    pause: (
      <>
        <path d="M8 5v14M16 5v14" />
      </>
    ),
    play: (
      <>
        <path d="m7 4 13 8-13 8Z" />
      </>
    ),
  };
  return (
    <svg
      className={`srl-icon ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
