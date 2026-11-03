// Hand-drawn Bakersfield-style stucco house used by the Color Studio and the
// process animation. Paintable parts read their color from CSS variables:
// --h-body, --h-trim, --h-door, --h-garage.
export function HouseShapes({ id }: { id: string }) {
  return (
    <g className="house">
      <rect className="h-lawn" x="0" y="372" width="640" height="48" />
      <path className="h-drive" d="M418 372H560L606 420H372Z" />
      <path className="h-walk" d="M206 372H254L262 420H198Z" />

      <rect className="h-body" x="70" y="180" width="320" height="192" />
      <rect className="h-body" x="390" y="212" width="190" height="160" />

      <path className="h-roof" d="M44 188 230 90 416 188Z" />
      <path className="h-roof" d="M370 220 485 150 600 220Z" />
      <path className="h-tiles" fill={`url(#${id}-tiles)`} d="M44 188 230 90 416 188Z" />
      <path className="h-tiles" fill={`url(#${id}-tiles)`} d="M370 220 485 150 600 220Z" />

      <rect className="h-trim" x="58" y="182" width="344" height="10" rx="2" />
      <rect className="h-trim" x="380" y="214" width="210" height="9" rx="2" />

      <path className="h-trim" d="M188 372V282a42 42 0 0 1 84 0v90Z" />
      <path className="h-door" d="M199 372V284a31 31 0 0 1 62 0v88Z" />
      <path className="h-detail" d="M230 262v110" />
      <circle className="h-knob" cx="250" cy="328" r="3.5" />

      {[96, 292].map((x) => (
        <g key={x}>
          <rect className="h-trim" x={x} y="232" width="72" height="80" rx="2" />
          <rect className="h-glass" x={x + 7} y="239" width="58" height="66" />
          <path className="h-shine" d={`M${x + 14} 296 ${x + 40} 246`} />
          <rect className="h-trim" x={x + 34.5} y="239" width="3" height="66" />
          <rect className="h-trim" x={x + 7} y="270" width="58" height="3" />
          <rect className="h-trim" x={x - 6} y="310" width="84" height="8" rx="2" />
        </g>
      ))}

      <rect className="h-trim" x="410" y="250" width="150" height="122" rx="2" />
      <rect className="h-garage" x="419" y="259" width="132" height="113" />
      {[287, 315, 343].map((y) => (
        <path key={y} className="h-detail" d={`M419 ${y}h132`} />
      ))}
      <rect className="h-lamp" x="398" y="268" width="7" height="14" rx="2" />
      <rect className="h-lamp" x="565" y="268" width="7" height="14" rx="2" />

      <ellipse className="h-shrub" cx="104" cy="372" rx="44" ry="20" />
      <ellipse className="h-shrub" cx="340" cy="372" rx="40" ry="17" />
      <path className="h-trunk" d="M614 372c-4-36-6-74-14-118l7-1c8 44 12 82 15 119Z" />
      <path className="h-frond" d="M603 254c-26-18-50-16-70-2 22-4 44 0 70 2Z" />
      <path className="h-frond" d="M603 254c-10-26-30-38-54-38 20 10 36 22 54 38Z" />
      <path className="h-frond" d="M603 254c8-26 26-38 50-40-18 12-34 24-50 40Z" />
      <path className="h-frond" d="M603 254c24-14 46-12 66 4-22-4-44-4-66-4Z" />
    </g>
  );
}

export function HouseDefs({ id }: { id: string }) {
  return (
    <defs>
      <pattern id={`${id}-tiles`} width="20" height="11" patternUnits="userSpaceOnUse">
        <path d="M0 10q5-7 10 0t10 0" fill="none" stroke="#0000002e" strokeWidth="1.6" />
      </pattern>
    </defs>
  );
}
