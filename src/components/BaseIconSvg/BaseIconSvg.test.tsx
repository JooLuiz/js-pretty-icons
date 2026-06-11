import { render } from "@testing-library/react";

import { BaseIconSvg } from "./BaseIconSvg";
import { buildIconClassName } from "./buildIconClassName";
import { resolveIconAccessibilityProps } from "./resolveIconAccessibilityProps";

describe("buildIconClassName", () => {
  it("returns only the base class when className is omitted", () => {
    expect(buildIconClassName("chevron-down-icon")).toBe("chevron-down-icon");
  });

  it("joins base and custom classes without undefined", () => {
    expect(buildIconClassName("chevron-down-icon", "custom-class")).toBe(
      "chevron-down-icon custom-class"
    );
  });
});

describe("resolveIconAccessibilityProps", () => {
  it("marks decorative icons as aria-hidden", () => {
    expect(resolveIconAccessibilityProps({})).toEqual({ "aria-hidden": true });
  });

  it("exposes labeled icons to assistive technology", () => {
    expect(resolveIconAccessibilityProps({ ariaLabel: "Close" })).toEqual({
      role: "img",
      "aria-hidden": false,
      "aria-label": "Close",
    });
  });

  it("supports title-only accessible names", () => {
    expect(resolveIconAccessibilityProps({ title: "Close" })).toEqual({
      role: "img",
      "aria-hidden": false,
    });
  });
});

describe("BaseIconSvg", () => {
  it("renders decorative icons by default", () => {
    const { container } = render(
      <BaseIconSvg baseClassName="chevron-down-icon" viewBox="0 0 24 24">
        <path d="M6 9L12 15L18 9" />
      </BaseIconSvg>
    );

    const svgElement = container.querySelector("svg");
    expect(svgElement).toHaveAttribute("aria-hidden", "true");
    expect(svgElement).not.toHaveAttribute("role");
    expect(svgElement).toHaveClass("chevron-down-icon");
    expect(svgElement).not.toHaveClass("undefined");
  });

  it("renders accessible icons with aria-label", () => {
    const { container } = render(
      <BaseIconSvg
        baseClassName="chevron-down-icon"
        viewBox="0 0 24 24"
        ariaLabel="Expand menu"
        className="custom-class"
      >
        <path d="M6 9L12 15L18 9" />
      </BaseIconSvg>
    );

    const svgElement = container.querySelector("svg");
    expect(svgElement).toHaveAttribute("role", "img");
    expect(svgElement).toHaveAttribute("aria-hidden", "false");
    expect(svgElement).toHaveAttribute("aria-label", "Expand menu");
    expect(svgElement).toHaveClass("chevron-down-icon custom-class");
  });

  it("renders a title element when title is provided", () => {
    const { container } = render(
      <BaseIconSvg
        baseClassName="chevron-down-icon"
        viewBox="0 0 24 24"
        title="Expand menu"
      >
        <path d="M6 9L12 15L18 9" />
      </BaseIconSvg>
    );

    const titleElement = container.querySelector("title");
    expect(titleElement).toHaveTextContent("Expand menu");
  });
});
