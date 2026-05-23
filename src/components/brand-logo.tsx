type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 360"
      role="img"
      aria-label="SRL Painting"
      className={className}
    >
      <defs>
        <linearGradient id="srl-maroon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#922040" />
          <stop offset="100%" stopColor="#6B1228" />
        </linearGradient>
      </defs>

      {/* House silhouette — outer black stroke */}
      <path
        fill="#111"
        d="M160 14 C160 14 290 88 290 88 L290 318 L30 318 L30 88 C30 88 160 14 160 14 Z"
      />

      {/* White border band */}
      <path
        fill="#fff"
        d="M160 26 C160 26 278 94 278 94 L278 306 L42 306 L42 94 C42 94 160 26 160 26 Z"
      />

      {/* Maroon house body */}
      <path
        fill="url(#srl-maroon)"
        stroke="#111"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M160 38 L266 98 L266 294 L54 294 L54 98 L160 38 Z"
      />

      {/* Roof + chimney */}
      <path
        fill="#601020"
        stroke="#111"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M54 98 L82 82 L82 58 L104 58 L104 74 L160 46 L216 74 L216 98 L266 98 L160 46 L54 98 Z"
      />
      <path
        fill="#601020"
        stroke="#111"
        strokeWidth="1.5"
        d="M82 58 L82 46 L98 46 L98 68 L82 58 Z"
      />

      {/* SRL */}
      <text
        x="160"
        y="176"
        textAnchor="middle"
        fill="#fff"
        stroke="#111"
        strokeWidth="2.5"
        paintOrder="stroke fill"
        fontFamily="Georgia, 'Times New Roman', Times, serif"
        fontSize="68"
        fontWeight="700"
        letterSpacing="-2"
      >
        SRL
      </text>

      {/* Paintbrush in L */}
      <g transform="translate(194, 128) rotate(12)">
        <rect x="1" y="0" width="4.5" height="26" rx="1" fill="#fff" stroke="#111" strokeWidth="0.7" />
        <path d="M-1 26 L7.5 26 L6 35 L1.5 35 Z" fill="#111" />
        <ellipse cx="3.25" cy="37" rx="3.5" ry="2.2" fill="#fff" stroke="#111" strokeWidth="0.7" />
      </g>

      {/* Painting */}
      <text
        x="160"
        y="218"
        textAnchor="middle"
        fill="#fff"
        stroke="#111"
        strokeWidth="1.5"
        paintOrder="stroke fill"
        fontFamily="Georgia, 'Times New Roman', Times, serif"
        fontSize="26"
        fontWeight="600"
      >
        Painting
      </text>

      {/* License */}
      <text
        x="160"
        y="264"
        textAnchor="middle"
        fill="#111"
        fontFamily="Georgia, 'Times New Roman', Times, serif"
        fontSize="12"
        fontWeight="700"
        letterSpacing="0.4"
      >
        Lic. 1108313
      </text>
    </svg>
  );
}
