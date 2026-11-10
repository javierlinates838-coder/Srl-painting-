// Ragged painted edge that lets one section's color bleed into the next.
// The outline is generated from a fixed seed so server and client match.
function edgePath(seed: number) {
  let t = seed;
  const rand = () => {
    t = (t * 1664525 + 1013904223) % 4294967296;
    return t / 4294967296;
  };
  const points: string[] = [];
  for (let x = 0; x <= 1200; x += 12) {
    const y = 16 + Math.sin(x / 90 + seed) * 7 + rand() * 20 + (rand() > 0.9 ? 12 : 0);
    points.push(`${x} ${y.toFixed(1)}`);
  }
  return `M0 0H1200V${points[points.length - 1].split(" ")[1]}L${points.reverse().join("L")}Z`;
}
const paths = [edgePath(3), edgePath(8), edgePath(21)];

export function BrushEdge({ tone, variant = 0 }: { tone: "black" | "cream" | "paper" | "char"; variant?: 0 | 1 | 2 }) {
  return (
    <svg className={`brush-edge edge-${tone}`} viewBox="0 0 1200 56" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d={paths[variant]} fill="currentColor" />
    </svg>
  );
}
