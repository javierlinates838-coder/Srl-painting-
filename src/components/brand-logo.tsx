import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="SRL Painting"
      width={400}
      height={460}
      className={className}
      priority={priority}
    />
  );
}
