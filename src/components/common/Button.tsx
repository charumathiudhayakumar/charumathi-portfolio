import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
type Props = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> & {
  variant?: "primary" | "secondary";
};
export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: Props) {
  return (
    <a className={`button button-${variant} ${className}`} {...props}>
      {children}
    </a>
  );
}
