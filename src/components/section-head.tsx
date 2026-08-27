import type { ReactNode } from "react";

type SectionHeadProps = {
  overline?: string;
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
      {overline ? (
        <>
          <div className={["accent-rule", centered ? "mx-auto" : ""].filter(Boolean).join(" ")} />
          <p className={`ios-section-header mt-4 !px-0 ${light ? "label-light" : ""}`}>{overline}</p>
        </>
      ) : null}
      <h2
        className={`display-title mt-3 text-balance ${centered ? "text-[clamp(1.75rem,4vw,2.75rem)]" : ""}`}
      >
        {title}
      </h2>
      {description ? <p className={`ios-callout mt-4 ${light ? "!text-zinc-600" : ""}`}>{description}</p> : null}
    </div>
  );
}
