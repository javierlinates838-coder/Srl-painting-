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
      <p className={["label", centered ? "label-center justify-center" : ""].filter(Boolean).join(" ")}>
        {label}
      </p>
      <h2
        className={[
          "display-lg mt-4 text-balance",
          light ? "text-white" : "text-ink",
        ].join(" ")}
      >
        {title}
      </h2>
      {description ? (
        <p className={["mt-4", light ? "text-white/75" : "body-lg"].join(" ")}>{description}</p>
      ) : null}
    </div>
  );
}
