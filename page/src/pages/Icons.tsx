import { useMemo, useState } from "react";
import * as prettyIconsExports from "js-pretty-icons";
import type { ComponentType } from "react";

type IconComponentProps = {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
};

type IconPreviewItem = {
  exportName: string;
  displayName: string;
  usageName: string;
  IconComponent: ComponentType<IconComponentProps>;
};

const prettyIconsRecord = prettyIconsExports as Record<string, unknown>;
const variantWordToNumberMap = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
} as const;

const convertExportNameToUsageName = (exportName: string) => {
  const exportNameWithoutSuffix = exportName.replace(/Icon$/, "");
  const kebabCaseName = exportNameWithoutSuffix
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase();

  return kebabCaseName.replace(
    /variant-(one|two|three|four)/g,
    (_, variantWord: keyof typeof variantWordToNumberMap) =>
      `variant-${variantWordToNumberMap[variantWord]}`
  );
};

const formatHumanReadableName = (exportName: string) => {
  const exportNameWithoutSuffix = exportName.replace(/Icon$/, "");

  return exportNameWithoutSuffix
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
};

const iconPreviewItems: IconPreviewItem[] = Object.keys(prettyIconsRecord)
  .filter((exportName) => exportName !== "default")
  .map((exportName) => {
    const exportedMember = prettyIconsRecord[exportName];

    if (typeof exportedMember !== "function") {
      return null;
    }

    return {
      exportName,
      displayName: formatHumanReadableName(exportName),
      usageName: convertExportNameToUsageName(exportName),
      IconComponent: exportedMember as ComponentType<IconComponentProps>,
    };
  })
  .filter((iconPreviewItem): iconPreviewItem is IconPreviewItem => iconPreviewItem !== null)
  .sort((firstIcon, secondIcon) => firstIcon.exportName.localeCompare(secondIcon.exportName));

type IconsPageProps = {
  theme: "dark" | "light";
};

const IconsPage = ({ theme }: IconsPageProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [iconSize, setIconSize] = useState(28);
  const iconColor = theme === "dark" ? "#ffffff" : "#000000";

  const filteredIconPreviewItems = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    if (!normalizedSearchTerm) {
      return iconPreviewItems;
    }

    return iconPreviewItems.filter((iconPreviewItem) =>
      iconPreviewItem.displayName.toLowerCase().includes(normalizedSearchTerm) ||
      iconPreviewItem.exportName.toLowerCase().includes(normalizedSearchTerm) ||
      iconPreviewItem.usageName.toLowerCase().includes(normalizedSearchTerm)
    );
  }, [searchTerm]);

  return (
    <div className="page-content">
      <section className="section-header">
        <h1>Icon Catalog</h1>
        <p>
          Browse all exported icons from `js-pretty-icons`. Search by component name and tweak the
          size/color preview controls.
        </p>
      </section>

      <section className="controls-panel">
        <label>
          Search
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Example: BellIcon or bell"
          />
        </label>
        <label>
          Size
          <input
            type="number"
            min={12}
            max={64}
            value={iconSize}
            onChange={(event) => setIconSize(Number(event.target.value))}
          />
        </label>
      </section>

      <section className="icon-grid" aria-label="Icons list">
        {filteredIconPreviewItems.map(
          ({ exportName, displayName, usageName, IconComponent }) => (
          <article key={exportName} className="icon-card">
            <div className="icon-preview">
              <IconComponent width={iconSize} height={iconSize} color={iconColor} />
            </div>
            <h2 className="icon-display-name">{displayName}</h2>
            <p className="icon-usage-name">icon=&quot;{usageName}&quot;</p>
            <p className="icon-jsx-name">&lt;{exportName} /&gt;</p>
          </article>
          )
        )}
      </section>
    </div>
  );
};

export default IconsPage;
