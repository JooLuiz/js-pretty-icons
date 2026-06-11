import type { ReactNode } from "react";

import { buildIconClassName } from "./buildIconClassName";
import { resolveIconAccessibilityProps } from "./resolveIconAccessibilityProps";

type BaseIconSvgProps = {
  baseClassName: string;
  viewBox: string;
  width?: number;
  height?: number;
  className?: string;
  ariaLabel?: string;
  title?: string;
  children: ReactNode;
};

const BaseIconSvg = ({
  baseClassName,
  viewBox,
  width,
  height,
  className,
  ariaLabel,
  title,
  children,
}: BaseIconSvgProps) => {
  const accessibilityProps = resolveIconAccessibilityProps({ ariaLabel, title });

  return (
    <svg
      width={width ?? 32}
      height={height ?? 32}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={buildIconClassName(baseClassName, className)}
      {...accessibilityProps}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
};

export type { BaseIconSvgProps };
export { BaseIconSvg };
