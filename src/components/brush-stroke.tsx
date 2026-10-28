// Hand-drawn paint stroke used to underline accent words. Decorative only.
export function BrushStroke({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 48"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M6 26c38-12 96-15 152-15 40 0 72-4 118-5 58-1 104 2 156 2 50 0 108-2 158 5 6 1 9 6 4 9-30 4-66 2-102 5-54 4-104 4-160 8-48 3-92 1-140 5-50 4-104 6-150 5-36-1-50-4-46-10 2-4 6-6 10-9Z"
      />
      <path
        fill="currentColor"
        opacity=".55"
        d="M40 38c60-4 140-5 220-4 70 1 150-2 230-6 10 0 12 4 2 6-80 8-170 10-250 11-70 1-140 0-200-2-10-1-12-4-2-5Z"
      />
    </svg>
  );
}
