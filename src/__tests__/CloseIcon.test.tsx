import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import CloseIcon from "../assets/CloseIcon/index";

describe("CloseIcon", () => {
  it("renders default dimensions and default stroke color", () => {
    const { container } = render(<CloseIcon />);

    const svgElement = container.querySelector("svg");
    const firstPathElement = container.querySelector("path");

    expect(svgElement).toBeInTheDocument();
    expect(firstPathElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("width", "32");
    expect(svgElement).toHaveAttribute("height", "32");
    expect(firstPathElement).toHaveAttribute("stroke", "#000000");
    expect(svgElement).toHaveClass("close-icon");
  });

  it("applies custom width, height, color and className", () => {
    const customColor = "#00aa55";
    const { container } = render(
      <CloseIcon
        width={20}
        height={22}
        color={customColor}
        className="close-custom-class"
      />
    );

    const svgElement = container.querySelector("svg");
    const firstPathElement = container.querySelector("path");

    expect(svgElement).toBeInTheDocument();
    expect(firstPathElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("width", "20");
    expect(svgElement).toHaveAttribute("height", "22");
    expect(firstPathElement).toHaveAttribute("stroke", customColor);
    expect(svgElement).toHaveClass("close-icon");
    expect(svgElement).toHaveClass("close-custom-class");
  });
});
