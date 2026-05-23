"use client";

import { type ElementType, type ReactNode, type Ref } from "react";
import { useInView } from "@/hooks/use-in-view";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: ElementType;
  /** Use inside flex/grid so the child becomes the direct layout item */
  layout?: "block" | "contents";
};

const delayClass: Record<number, string> = {
  0: "",
  1: "reveal-d1",
  2: "reveal-d2",
  3: "reveal-d3",
  4: "reveal-d4",
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  layout = "block",
}: RevealProps) {
  const { ref, inView } = useInView();

  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      className={[
        "reveal-on-scroll",
        delayClass[delay],
        inView ? "is-visible" : "",
        layout === "contents" ? "reveal-contents" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
