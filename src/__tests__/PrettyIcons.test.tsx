import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import PrettyIcons from "../components/PrettyIcons/index";

describe("PrettyIcons", () => {
  it("renders icon with default width and height", () => {
    const { container } = render(<PrettyIcons icon="chevron-down" />);

    const svgElement = container.querySelector("svg");
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("width", "32");
    expect(svgElement).toHaveAttribute("height", "32");
  });

  it("forwards custom size, color and className", () => {
    const customColor = "#ff0000";
    const { container } = render(
      <PrettyIcons
        icon="chevron-down"
        width={48}
        height={24}
        color={customColor}
        className="custom-chevron-class"
      />
    );

    const svgElement = container.querySelector("svg");
    const pathElement = container.querySelector("path");
    expect(svgElement).toBeInTheDocument();
    expect(pathElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("width", "48");
    expect(svgElement).toHaveAttribute("height", "24");
    expect(pathElement).toHaveAttribute("stroke", customColor);
    expect(svgElement).toHaveClass("chevron-down-icon");
    expect(svgElement).toHaveClass("custom-chevron-class");
  });

  it("renders expected icon component for mapped icon names", () => {
    const iconMappings = [
      { icon: "bag", expectedClassName: "bag-icon" },
      { icon: "facebook", expectedClassName: "facebook-icon" },
      { icon: "search", expectedClassName: "search-icon" },
      { icon: "close", expectedClassName: "close-icon" },
      { icon: "exclamation-mark", expectedClassName: "exclamation-mark-icon" },
      { icon: "question-mark", expectedClassName: "question-mark-icon" },
    ] as const;

    iconMappings.forEach(({ icon, expectedClassName }) => {
      const { container, unmount } = render(<PrettyIcons icon={icon} />);

      const iconElement = container.querySelector(`.${expectedClassName}`);
      expect(iconElement).toBeInTheDocument();

      unmount();
    });
  });
});
