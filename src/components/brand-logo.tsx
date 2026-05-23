type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

/** Replace /public/logo.png with the official SRL logo file (PNG with transparent background). */
export function BrandLogo({ className = "h-11 w-auto object-contain", priority = false }: BrandLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="SRL Painting"
      className={className}
      fetchPriority={priority ? "high" : "auto"}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
