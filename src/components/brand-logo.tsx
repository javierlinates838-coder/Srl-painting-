type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

/** SVG has a transparent background — PNG has a white box around the house shape */
export function BrandLogo({ className = "h-11 w-auto object-contain", priority = false }: BrandLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      alt="SRL Painting"
      className={className}
      fetchPriority={priority ? "high" : "auto"}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
