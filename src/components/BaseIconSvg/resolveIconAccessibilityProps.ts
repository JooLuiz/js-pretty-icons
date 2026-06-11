type IconAccessibilityInput = {
  ariaLabel?: string;
  title?: string;
};

type IconAccessibilityProps = {
  role?: "img";
  "aria-hidden"?: boolean;
  "aria-label"?: string;
};

const resolveIconAccessibilityProps = ({
  ariaLabel,
  title,
}: IconAccessibilityInput): IconAccessibilityProps => {
  const hasAccessibleName = Boolean(ariaLabel || title);

  if (!hasAccessibleName) {
    return { "aria-hidden": true };
  }

  return {
    role: "img",
    "aria-hidden": false,
    ...(ariaLabel ? { "aria-label": ariaLabel } : {}),
  };
};

export type { IconAccessibilityInput, IconAccessibilityProps };
export { resolveIconAccessibilityProps };
