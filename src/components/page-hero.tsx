import type { ReactNode } from "react";
import { BrushEdge } from "./brush-edge";

// Title band at the top of every inner page.
export function PageHero({ kicker, title, accent, children, tone = "cream" }: {
  kicker: string;
  title: string;
  accent: string;
  children?: ReactNode;
  tone?: "cream" | "paper" | "black";
}) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-inner" data-reveal>
        <p className="kicker">{kicker}</p>
        <h1>
          {title}
          <br />
          <span className="red">{accent}</span>
        </h1>
        {children ? <div className="page-hero-text">{children}</div> : null}
      </div>
      <div className="page-hero-edge">
        <BrushEdge tone={tone} />
      </div>
    </section>
  );
}
