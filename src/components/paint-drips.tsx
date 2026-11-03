// Paint dripping off the edge above. Drip lengths are fixed so the shape is
// identical on server and client; each drip grows in when scrolled into view.
const drips = [
  [40, 14, 34], [118, 10, 18], [190, 18, 52], [262, 9, 22], [330, 14, 40], [420, 11, 16],
  [488, 20, 60], [560, 10, 26], [636, 15, 44], [714, 9, 20], [782, 17, 56], [860, 11, 24],
  [930, 14, 38], [1004, 10, 18], [1072, 19, 50], [1146, 12, 28],
] as const;

export function PaintDrips({ className = "" }: { className?: string }) {
  return (
    <svg className={`paint-drips ${className}`} viewBox="0 0 1200 56" preserveAspectRatio="xMidYMin slice" aria-hidden="true" focusable="false" data-drips>
      <path d="M0 0h1200v8c-40 4-80-3-120 2s-90-2-140 3-100-4-150 1-110-3-160 2-120-4-170 1-100-3-150 2-90-4-130 0-60-2-180-1Z" fill="currentColor" />
      {drips.map(([x, w, len], i) => (
        <path key={x} className="drip" style={{ animationDelay: `${i * 70}ms` }} fill="currentColor"
          d={`M${x - w / 2} 6v${len * 0.5}a${w / 2} ${w / 2} 0 0 0 ${w} 0v-${len * 0.5}Z`} />
      ))}
    </svg>
  );
}
