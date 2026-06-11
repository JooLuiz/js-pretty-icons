import { readFileSync } from "fs";
import { resolve } from "path";
import { render } from "@testing-library/react";
import type { ComponentType } from "react";

import * as iconLibrary from "../index";

import type { IconProps } from "../types/shared";

type IconEntry = [string, ComponentType<IconProps>];

const sharedTypesPath = resolve(__dirname, "../types/shared.d.ts");
const sharedTypesFile = readFileSync(sharedTypesPath, "utf-8");
const iconNamesFromTypes = Array.from(
  sharedTypesFile.matchAll(/\|\s*"([^"]+)"/g),
  (iconNameMatch) => iconNameMatch[1]
);

const iconEntries: IconEntry[] = Object.entries(iconLibrary)
  .filter(
    ([exportName, exportedValue]) =>
      exportName !== "default" &&
      exportName !== "PrettyIcons" &&
      typeof exportedValue === "function"
  )
  .map(([exportName, exportedValue]) => [
    exportName,
    exportedValue as ComponentType<IconProps>,
  ]);

describe("Icon components", () => {
  it("contains one component export for each icon type", () => {
    expect(iconEntries).toHaveLength(iconNamesFromTypes.length);
  });

  it.each(iconEntries)(
    "renders %s with default dimensions and color",
    (_, IconComponent) => {
      const { container } = render(<IconComponent />);
      const svgElement = container.querySelector("svg");
      const defaultColorElement = container.querySelector(
        '[stroke="#000000"], [fill="#000000"]'
      );

      expect(svgElement).toBeInTheDocument();
      expect(svgElement).toHaveAttribute("width", "32");
      expect(svgElement).toHaveAttribute("height", "32");
      expect(svgElement).toHaveAttribute("aria-hidden", "true");
      expect(svgElement).not.toHaveClass("undefined");
      expect(defaultColorElement).toBeInTheDocument();
    }
  );

  it.each(iconEntries)(
    "renders %s with custom dimensions, color and className",
    (_, IconComponent) => {
      const customColor = "#12ab34";
      const customClassName = "custom-icon-class";

      const { container } = render(
        <IconComponent
          width={28}
          height={20}
          color={customColor}
          className={customClassName}
        />
      );

      const svgElement = container.querySelector("svg");
      const customColorElement = container.querySelector(
        `[stroke="${customColor}"], [fill="${customColor}"]`
      );

      expect(svgElement).toBeInTheDocument();
      expect(svgElement).toHaveAttribute("width", "28");
      expect(svgElement).toHaveAttribute("height", "20");
      expect(svgElement).toHaveClass(customClassName);
      expect(svgElement).not.toHaveClass("undefined");
      expect(customColorElement).toBeInTheDocument();
    }
  );

  it("supports accessible names through ariaLabel", () => {
    const ChevronDownIcon = iconEntries.find(
      ([exportName]) => exportName === "ChevronDownIcon"
    )?.[1];

    expect(ChevronDownIcon).toBeDefined();

    const { container } = render(
      <ChevronDownIcon ariaLabel="Expand section" />
    );

    const svgElement = container.querySelector("svg");
    expect(svgElement).toHaveAttribute("role", "img");
    expect(svgElement).toHaveAttribute("aria-label", "Expand section");
  });

  it("supports accessible names through title", () => {
    const ChevronDownIcon = iconEntries.find(
      ([exportName]) => exportName === "ChevronDownIcon"
    )?.[1];

    expect(ChevronDownIcon).toBeDefined();

    const { container } = render(<ChevronDownIcon title="Expand section" />);

    expect(container.querySelector("title")).toHaveTextContent("Expand section");
  });
});
