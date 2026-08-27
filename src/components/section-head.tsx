import type { ReactNode } from "react";

type SectionHeadProps = {
  overline?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHead({ overline, title, description, align = "left", className = "" }: SectionHeadProps) {
  const centered = align === "center";

  return (
    <div className={[centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className].filter(Boolean).join(" ")}>
      {overline ? <p className="ios-section-header !px-0">{overline}</p> : null}
      <h2 className={`display-title mt-2 text-balance ${centered ? "text-[clamp(1.75rem,4vw,2.5rem)]" : ""}`}>
        {title}
      </h2>
      {description ? <p className="ios-callout mt-4">{description}</p> : null}
    </div>
  );
}
