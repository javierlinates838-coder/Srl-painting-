import type { ReactNode } from "react";

type SectionHeadProps = {
  overline?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export function SectionHead({ overline, title, description, className = "" }: SectionHeadProps) {
  return (
    <div className={["px-1", className].filter(Boolean).join(" ")}>
      {overline ? <p className="ios-section-header !px-0">{overline}</p> : null}
      <h2 className={`ios-title-1 text-balance ${overline ? "mt-1" : ""}`}>{title}</h2>
      {description ? <p className="ios-callout mt-2">{description}</p> : null}
    </div>
  );
}
