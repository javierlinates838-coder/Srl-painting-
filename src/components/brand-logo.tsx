import Image from "next/image";
import srlLogo from "@/assets/srl-logo.png";

type BrandLogoProps = {
  className?: string;
  preload?: boolean;
};

export function BrandLogo({ className = "h-11 w-auto object-contain", preload = false }: BrandLogoProps) {
  return (
    <Image
      src={srlLogo}
      alt="SRL Painting"
      width={srlLogo.width}
      height={srlLogo.height}
      className={className}
      preload={preload}
      sizes="(max-width: 768px) 120px, 160px"
    />
  );
}
