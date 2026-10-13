import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ActionLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
  variant?: "primary" | "secondary" | "light" | "ghost";
};

export function ActionLink({ variant = "primary", className = "", ...props }: ActionLinkProps) {
  const classes = `button ${variant === "primary" ? "" : `button-${variant}`} ${className}`;
  return props.href.startsWith("/") && !/\.[a-z0-9]+(?:[?#]|$)/i.test(props.href) ? (
    <Link {...props} className={classes} />
  ) : (
    <a {...props} className={classes} />
  );
}

export interface MetadataItem {
  label: string;
  value: string;
}

export function MetadataList({
  items,
  className
}: {
  items: readonly MetadataItem[];
  className: string;
}) {
  return (
    <dl className={className}>
      {items.map(({ label, value }) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
