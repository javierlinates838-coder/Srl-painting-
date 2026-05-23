"use client";

import { useState } from "react";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  const [src, setSrc] = useState("/logo.png");

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="SRL Painting"
      width={400}
      height={440}
      className={className}
      fetchPriority={priority ? "high" : "auto"}
      loading={priority ? "eager" : "lazy"}
      onError={() => {
        if (src !== "/logo.svg") setSrc("/logo.svg");
      }}
    />
  );
}
