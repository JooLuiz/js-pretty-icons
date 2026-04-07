import { readFileSync } from "fs";
import { resolve } from "path";
import { render } from "@testing-library/react";

import { PrettyIcons } from "./PrettyIcons";

import type { Icons } from "../../types/shared";

const sharedTypesPath = resolve(__dirname, "../../types/shared.d.ts");
const sharedTypesFile = readFileSync(sharedTypesPath, "utf-8");

const iconNames = Array.from(
  sharedTypesFile.matchAll(/\|\s*"([^"]+)"/g),
  (iconNameMatch) => iconNameMatch[1] as Icons
);

describe("PrettyIcons wrapper", () => {
  it("loads all icon names from shared types", () => {
    expect(iconNames.length).toBeGreaterThan(0);
  });

  it("renders the expected component for alarm icon", () => {
    const { container } = render(<PrettyIcons icon="alarm" />);

    const alarmIcon = container.querySelector(".alarm-icon");
    expect(alarmIcon).toBeInTheDocument();
  });

  it.each(iconNames)(
    "renders icon '%s' and forwards dimensions, color and className",
    (iconName) => {
      const customColor = "#ff6600";
      const customClassName = "wrapper-custom-class";

      const { container } = render(
        <PrettyIcons
          icon={iconName}
          width={40}
          height={26}
          color={customColor}
          className={customClassName}
        />
      );

      const svgElement = container.querySelector("svg");
      const customColorElement = container.querySelector(
        `[stroke="${customColor}"], [fill="${customColor}"]`
      );

      expect(svgElement).toBeInTheDocument();
      expect(svgElement).toHaveAttribute("width", "40");
      expect(svgElement).toHaveAttribute("height", "26");
      expect(svgElement).toHaveClass(customClassName);
      expect(customColorElement).toBeInTheDocument();
    }
  );
});
