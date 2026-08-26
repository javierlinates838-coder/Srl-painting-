import Link from "next/link";
import type { ReactNode } from "react";

export function IosSectionHeader({ children }: { children: ReactNode }) {
  return <p className="ios-section-header">{children}</p>;
}

export function IosGroup({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`ios-group ${className}`.trim()}>{children}</div>;
}

type IosRowProps = {
  children: ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  chevron?: boolean;
  destructive?: boolean;
  className?: string;
};

export function IosRow({
  children,
  href,
  external = false,
  onClick,
  chevron = false,
  destructive = false,
  className = "",
}: IosRowProps) {
  const classes = [
    "ios-row",
    destructive ? "ios-row-destructive" : "",
    href || onClick ? "ios-row-tappable" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      <span className="ios-row-content">{children}</span>
      {chevron && (
        <svg className="ios-chevron" viewBox="0 0 8 14" fill="none" aria-hidden>
          <path d="M1 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  );

  if (href) {
    if (external || href.startsWith("http")) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {inner}
      </button>
    );
  }

  return <div className={classes}>{inner}</div>;
}

export function IosSegmented({
  options,
  value,
  onChange,
  label,
}: {
  options: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
  label?: string;
}) {
  return (
    <div role="tablist" aria-label={label} className="ios-segmented">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          role="tab"
          aria-selected={value === o.id}
          onClick={() => onChange(o.id)}
          className={`ios-segment ${value === o.id ? "is-active" : ""}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
