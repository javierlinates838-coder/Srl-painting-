// Hand-drawn interior scenes for the Color Studio. Paintable surfaces read
// their color from CSS variables (--r-* for the living room, --k-* for the kitchen).

export function LivingRoomScene() {
  return (
    <g className="room">
      <path className="r-ceiling" d="M0 0H640V60H190L0 10Z" />
      <rect className="r-wall" x="190" y="60" width="450" height="240" />
      <path className="r-accent" d="M0 10 190 60V300L0 372Z" />
      <path className="r-shade" d="M0 10 190 60V300L0 372Z" />
      <path className="r-floor" d="M0 372 190 300H640V420H0Z" />
      <path className="r-plank" d="M190 300 0 420M300 300 190 420M410 300 380 420M520 300 570 420M0 396H640M60 349H640" />

      {/* window and the light it throws */}
      <rect className="r-trim" x="446" y="92" width="150" height="146" rx="2" />
      <rect className="r-glass" x="456" y="102" width="130" height="126" />
      <rect className="r-trim" x="518.5" y="102" width="5" height="126" />
      <rect className="r-trim" x="456" y="162" width="130" height="5" />
      <rect className="r-trim" x="438" y="236" width="166" height="9" rx="2" />
      <path className="r-light" d="M456 300h130l54 120H420Z" />

      {/* crown and baseboards */}
      <rect className="r-trim" x="190" y="60" width="450" height="9" />
      <path className="r-trim" d="M0 10 190 60v9L0 20Z" />
      <rect className="r-trim" x="190" y="287" width="450" height="13" />
      <path className="r-trim" d="M0 356 190 287v13L0 372Z" />

      {/* art */}
      <rect className="r-frame" x="262" y="104" width="112" height="84" rx="2" />
      <rect className="r-mat" x="270" y="112" width="96" height="68" />
      <circle className="r-art-a" cx="300" cy="150" r="20" />
      <path className="r-art-b" d="M318 174l22-38 22 38Z" />

      {/* rug, sofa, pillows */}
      <ellipse className="r-rug" cx="330" cy="356" rx="190" ry="30" />
      <rect className="r-leg" x="236" y="318" width="8" height="16" />
      <rect className="r-leg" x="412" y="318" width="8" height="16" />
      <rect className="r-sofa-back" x="230" y="216" width="196" height="70" rx="14" />
      <rect className="r-sofa" x="214" y="262" width="228" height="60" rx="14" />
      <rect className="r-sofa-arm" x="204" y="246" width="34" height="76" rx="12" />
      <rect className="r-sofa-arm" x="418" y="246" width="34" height="76" rx="12" />
      <path className="r-seam" d="M328 266v52" />
      <rect className="r-pillow-a" x="250" y="236" width="44" height="40" rx="8" transform="rotate(-8 272 256)" />
      <rect className="r-pillow-b" x="364" y="238" width="42" height="38" rx="8" transform="rotate(7 385 257)" />

      {/* plant */}
      <path className="r-leaf" d="M112 330c-30-40-34-78-14-110 12 36 18 70 14 110ZM112 330c-4-52 10-92 44-112-4 44-18 82-44 112ZM112 330c-44-18-66-48-70-86 34 16 58 44 70 86ZM112 330c20-34 48-50 82-48-20 28-48 44-82 48Z" />
      <path className="r-pot" d="M88 328h48l-7 50H95Z" />

      {/* floor lamp */}
      <path className="r-lamp-pole" d="M588 372V214" />
      <path className="r-lamp-shade" d="M564 214h48l-10-44h-28Z" />
      <ellipse className="r-lamp-base" cx="588" cy="374" rx="20" ry="5" />
    </g>
  );
}

const upperDoors = [44, 114, 184, 394, 464, 534];
const lowerUnits = [44, 119, 194, 376, 451, 526];

export function KitchenScene() {
  return (
    <g className="kitchen">
      <rect className="k-wall" x="0" y="0" width="640" height="372" />
      <rect className="k-floor" x="0" y="372" width="640" height="48" />
      <path className="k-floor-line" d="M0 396H640M80 372v48M240 372v48M400 372v48M560 372v48" />

      {/* backsplash */}
      <rect className="k-splash" x="40" y="156" width="560" height="58" />
      <path className="k-grout" d="M40 175h560M40 194h560M82 156v58M124 156v58M166 156v58M208 156v58M250 156v58M292 156v58M334 156v58M376 156v58M418 156v58M460 156v58M502 156v58M544 156v58M586 156v58" />

      {/* upper cabinets */}
      <rect className="k-upper" x="40" y="42" width="214" height="114" />
      <rect className="k-upper" x="390" y="42" width="214" height="114" />
      {upperDoors.map((x) => (
        <g key={x}>
          <rect className="k-panel" x={x + 8} y="54" width="50" height="90" />
          <rect className="k-hw" x={x + 50} y="118" width="4" height="20" rx="2" />
          <path className="k-gap" d={`M${x + 68} 42v114`} />
        </g>
      ))}
      <rect className="k-under" x="40" y="156" width="214" height="5" />
      <rect className="k-under" x="390" y="156" width="214" height="5" />

      {/* range hood */}
      <path className="k-steel" d="M286 42h72v52l22 50H264l22-50Z" />
      <path className="k-steel-line" d="M264 144h116M286 94h72" />

      {/* counter */}
      <rect className="k-counter" x="30" y="212" width="580" height="14" rx="2" />

      {/* lower cabinets */}
      <rect className="k-lower" x="40" y="226" width="224" height="136" />
      <rect className="k-lower" x="376" y="226" width="224" height="136" />
      {lowerUnits.map((x) => (
        <g key={x}>
          <rect className="k-panel" x={x + 7} y="236" width="60" height="26" />
          <rect className="k-panel" x={x + 7} y="270" width="60" height="82" />
          <rect className="k-hw" x={x + 27} y="246" width="20" height="4" rx="2" />
          <rect className="k-hw" x={x + 56} y="280" width="4" height="20" rx="2" />
          <path className="k-gap" d={`M${x + 74} 226v136`} />
        </g>
      ))}
      <rect className="k-toe" x="40" y="362" width="560" height="10" />

      {/* range */}
      <rect className="k-steel" x="264" y="212" width="112" height="150" rx="3" />
      <rect className="k-oven" x="276" y="250" width="88" height="92" rx="4" />
      <rect className="k-hw-steel" x="282" y="238" width="76" height="5" rx="2.5" />
      <circle className="k-knob" cx="284" cy="224" r="4" />
      <circle className="k-knob" cx="304" cy="224" r="4" />
      <circle className="k-knob" cx="336" cy="224" r="4" />
      <circle className="k-knob" cx="356" cy="224" r="4" />

      {/* on the counter */}
      <path className="k-faucet" d="M118 212v-30a14 14 0 0 1 28 0v6" />
      <rect className="k-board" x="176" y="176" width="34" height="36" rx="4" />
      <path className="k-pot" d="M468 196h40l-5 16h-30Z" />
      <path className="k-leaf" d="M488 196c-16-12-20-28-12-42 10 12 14 26 12 42ZM488 196c2-20 12-32 28-36-2 16-12 28-28 36ZM488 196c-4-16 0-30 10-40 4 16 0 28-10 40Z" />
      <rect className="k-jar" x="540" y="184" width="18" height="28" rx="3" />
      <rect className="k-jar" x="564" y="190" width="16" height="22" rx="3" />
    </g>
  );
}

// Small storefront used on the commercial service panel.
export function StorefrontArt() {
  return (
    <svg className="storefront" viewBox="0 0 400 300" aria-hidden="true" focusable="false">
      <rect x="40" y="40" width="320" height="230" fill="#1a1a1d" />
      <rect x="40" y="40" width="320" height="34" fill="#0d0d0e" />
      <rect x="120" y="48" width="160" height="18" rx="3" fill="#ffffff" opacity=".92" />
      <clipPath id="awning">
        <path d="M30 74h340l14 46H16Z" />
      </clipPath>
      <g clipPath="url(#awning)">
        <rect x="0" y="70" width="400" height="54" fill="#fff" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={16 + i * 82} y="70" width="41" height="54" fill="#c8102e" />
        ))}
      </g>
      <path d="M16 120h368v8H16Z" fill="#00000030" />
      <rect x="62" y="140" width="110" height="110" fill="#9cc3dc" />
      <path d="M72 240 120 150" stroke="#fff" strokeOpacity=".6" strokeWidth="6" strokeLinecap="round" />
      <rect x="228" y="140" width="110" height="110" fill="#9cc3dc" />
      <path d="M238 240 286 150" stroke="#fff" strokeOpacity=".6" strokeWidth="6" strokeLinecap="round" />
      <rect x="182" y="140" width="36" height="130" fill="#c8102e" />
      <circle cx="210" cy="208" r="3" fill="#ffd76a" />
      <rect x="20" y="270" width="360" height="10" fill="#0d0d0e" />
    </svg>
  );
}
