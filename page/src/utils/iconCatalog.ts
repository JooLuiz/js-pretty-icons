import * as prettyIconsExports from "js-pretty-icons";
import type { ComponentType } from "react";

export type IconComponentProps = {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
};

export type IconPreviewItem = {
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

export const convertExportNameToUsageName = (exportName: string) => {
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

export const formatHumanReadableName = (exportName: string) => {
  const exportNameWithoutSuffix = exportName.replace(/Icon$/, "");

  return exportNameWithoutSuffix
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
};

export const buildIconPreviewItems = (): IconPreviewItem[] =>
  Object.keys(prettyIconsRecord)
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
    .filter(
      (iconPreviewItem): iconPreviewItem is IconPreviewItem =>
        iconPreviewItem !== null
    )
    .sort((firstIcon, secondIcon) =>
      firstIcon.exportName.localeCompare(secondIcon.exportName)
    );

export const iconPreviewItems = buildIconPreviewItems();
export const ICON_COUNT = iconPreviewItems.length;
