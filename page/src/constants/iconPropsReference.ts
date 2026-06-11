export type IconPropReferenceRow = {
  prop: string;
  type: string;
  defaultValue: string;
  required: string;
  description: string;
};

export const iconPropsReference: IconPropReferenceRow[] = [
  {
    prop: "icon",
    type: "string",
    defaultValue: "—",
    required: "Yes (PrettyIcons only)",
    description: "Kebab-case icon key",
  },
  {
    prop: "width",
    type: "number",
    defaultValue: "32",
    required: "No",
    description: "Icon width in pixels",
  },
  {
    prop: "height",
    type: "number",
    defaultValue: "32",
    required: "No",
    description: "Icon height in pixels",
  },
  {
    prop: "color",
    type: "string",
    defaultValue: "#000000",
    required: "No",
    description: "Icon stroke or fill color",
  },
  {
    prop: "className",
    type: "string",
    defaultValue: "—",
    required: "No",
    description: "Extra CSS class; always includes `{icon-name}-icon`",
  },
  {
    prop: "ariaLabel",
    type: "string",
    defaultValue: "—",
    required: "No",
    description:
      "Accessible label for screen readers. When omitted, the icon is treated as decorative.",
  },
  {
    prop: "title",
    type: "string",
    defaultValue: "—",
    required: "No",
    description:
      "SVG title used as an accessible name. When omitted, the icon is treated as decorative.",
  },
];

export const iconAccessibilityNote =
  'Icons are decorative by default (aria-hidden="true"). Provide ariaLabel or title when the icon conveys meaning on its own.';
