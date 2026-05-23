"use client";

import Image from "next/image";
import { useState } from "react";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

function LogoFallback({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 230" className={className} role="img" aria-label="SRL Painting">
      <path fill="#111" d="M100 8 L188 72 V208 H12 V72 Z" />
      <path fill="#fff" d="M100 18 L178 76 V198 H22 V76 Z" />
      <path fill="#7f1d3a" stroke="#111" strokeWidth="1.5" d="M100 28 L168 78 V188 H32 V78 Z" />
      <path fill="#5c1529" d="M32 78 L56 64 V50 H72 V68 L100 52 L128 68 V78 H168 L100 52 Z" />
      <text x="100" y="118" textAnchor="middle" fill="#fff" stroke="#111" strokeWidth="1.2" paintOrder="stroke fill" fontFamily="Georgia,serif" fontSize="44" fontWeight="700">SRL</text>
      <text x="100" y="148" textAnchor="middle" fill="#fff" stroke="#111" strokeWidth="0.8" paintOrder="stroke fill" fontFamily="Georgia,serif" fontSize="17" fontWeight="600">Painting</text>
      <text x="100" y="172" textAnchor="middle" fill="#111" fontFamily="Georgia,serif" fontSize="9" fontWeight="700">Lic. 1108313</text>
    </svg>
  );
}

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) return <LogoFallback className={className} />;

  return (
    <Image
      src="/logo.png"
      alt="SRL Painting"
      width={400}
      height={460}
      className={className}
      priority={priority}
      onError={() => setFailed(true)}
    />
  );
}
