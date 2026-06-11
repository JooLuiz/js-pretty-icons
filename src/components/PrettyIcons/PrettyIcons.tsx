import { iconRegistry } from "../../registry/iconRegistry";

import type { PrettyIconsProps } from "../../types/prettyIcons";

const PrettyIcons = ({ icon, ...iconProps }: PrettyIconsProps) => {
  const IconComponent = iconRegistry[icon];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...iconProps} />;
};

export { PrettyIcons };
