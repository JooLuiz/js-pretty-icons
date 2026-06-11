import type { IconPreviewItem } from "../utils/iconCatalog";

import CopyButton from "./CopyButton";

type IconCardProps = {
  iconPreviewItem: IconPreviewItem;
  iconSize: number;
  iconColor: string;
};

const IconCard = ({ iconPreviewItem, iconSize, iconColor }: IconCardProps) => {
  const { exportName, displayName, usageName, IconComponent } = iconPreviewItem;
  const prettyIconsUsage = `icon="${usageName}"`;
  const jsxUsage = `<${exportName} />`;
  const importUsage = `import { ${exportName} } from "js-pretty-icons"`;

  return (
    <article className="icon-card">
      <div className="icon-preview">
        <IconComponent width={iconSize} height={iconSize} color={iconColor} />
      </div>
      <h2 className="icon-display-name">{displayName}</h2>
      <div className="icon-copy-row">
        <code className="icon-copy-value">{prettyIconsUsage}</code>
        <CopyButton value={prettyIconsUsage} label="PrettyIcons usage" />
      </div>
      <div className="icon-copy-row">
        <code className="icon-copy-value">{jsxUsage}</code>
        <CopyButton value={jsxUsage} label="JSX usage" />
      </div>
      <div className="icon-copy-row">
        <code className="icon-copy-value">{importUsage}</code>
        <CopyButton value={importUsage} label="import statement" />
      </div>
    </article>
  );
};

export default IconCard;
