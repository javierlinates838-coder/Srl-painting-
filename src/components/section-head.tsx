import type { ReactNode } from "react";

type SectionHeadProps = {
  label: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHead({
  label,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}: SectionHeadProps) {
  const centered = align === "center";

  return (
    <div className={[centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className].filter(Boolean).join(" ")}>
      <div className={["accent-rule", centered ? "mx-auto" : "", light ? "bg-brand-light" : ""].filter(Boolean).join(" ")} />
      <p className={["label mt-4", light ? "label-light" : ""].filter(Boolean).join(" ")}>{label}</p>
      <h2 className={["display-lg mt-3 text-balance", light ? "text-white" : "text-black"].join(" ")}>{title}</h2>
      {description ? (
        <div className={["mt-4", light ? "text-[15px] leading-relaxed text-zinc-400" : "body-lg"].join(" ")}>
          {description}
        </div>
      ) : null}
    </div>
  );
}
