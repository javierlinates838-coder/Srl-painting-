import Image from "next/image";
import srlLogo from "@/assets/srl-logo.png";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className = "h-11 w-auto object-contain", priority = false }: BrandLogoProps) {
  return (
    <Image
      src={srlLogo}
      alt="SRL Painting"
      width={srlLogo.width}
      height={srlLogo.height}
      className={className}
      priority={priority}
      sizes="(max-width: 768px) 120px, 160px"
    />
  );
}
