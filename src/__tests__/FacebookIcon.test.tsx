import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import FacebookIcon from "../assets/FacebookIcon/index";

describe("FacebookIcon", () => {
  it("renders default dimensions and default fill color", () => {
    const { container } = render(<FacebookIcon />);

    const svgElement = container.querySelector("svg");
    const pathElement = container.querySelector("path");

    expect(svgElement).toBeInTheDocument();
    expect(pathElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("width", "32");
    expect(svgElement).toHaveAttribute("height", "32");
    expect(pathElement).toHaveAttribute("fill", "#000000");
    expect(svgElement).toHaveClass("facebook-icon");
  });

  it("applies custom width, height, color and className", () => {
    const customColor = "#3366ff";
    const { container } = render(
      <FacebookIcon
        width={40}
        height={44}
        color={customColor}
        className="facebook-custom-class"
      />
    );

    const svgElement = container.querySelector("svg");
    const pathElement = container.querySelector("path");

    expect(svgElement).toBeInTheDocument();
    expect(pathElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("width", "40");
    expect(svgElement).toHaveAttribute("height", "44");
    expect(pathElement).toHaveAttribute("fill", customColor);
    expect(svgElement).toHaveClass("facebook-icon");
    expect(svgElement).toHaveClass("facebook-custom-class");
  });
});
