import type { ReactNode } from "react";

type SectionHeadProps = {
  overline: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHead({
  overline,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}: SectionHeadProps) {
  const centered = align === "center";

  return (
    <div className={[centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className].filter(Boolean).join(" ")}>
      <p className={`overline ${light ? "!text-umber-light" : ""}`}>{overline}</p>
      <h2 className={`headline-lg mt-5 text-balance ${light ? "!text-chalk" : ""}`}>{title}</h2>
      {description ? (
        <div className={`mt-5 ${light ? "prose-body-sm !text-umber-light" : "prose-body"}`}>{description}</div>
      ) : null}
    </div>
  );
}
