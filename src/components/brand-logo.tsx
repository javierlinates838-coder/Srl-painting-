import srlLogo from "@/assets/srl-logo.png";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className = "h-11 w-auto object-contain", priority = false }: BrandLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={srlLogo.src}
      alt="SRL Painting"
      width={srlLogo.width}
      height={srlLogo.height}
      className={className}
      fetchPriority={priority ? "high" : "auto"}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
