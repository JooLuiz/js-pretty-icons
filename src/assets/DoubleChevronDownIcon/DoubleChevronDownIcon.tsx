import { IconProps } from "../../types/shared";

//Icon Link:
const DoubleChevronDownIcon = ({
  width,
  height,
  color,
  className,
}: IconProps) => {
  const iconFill = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`double-chevron-down-icon ${className}`}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <g fill={iconFill} transform="translate(134.186667, 123.520000)">
          <path
            d="M140.16,18.1333333 L261.76,139.946667 L140.16,261.76 L109.866667,231.466667 L201.6,139.946667 L109.866667,48.4266667 L140.16,18.1333333 Z M12.16,18.1333333 L133.76,139.946667 L12.16,261.76 L-18.1333333,231.466667 L73.6,139.946667 L-18.1333333,48.4266667 L12.16,18.1333333 Z"
            transform="translate(121.813333, 139.946667) rotate(-270.000000) translate(-121.813333, -139.946667)"
          />
        </g>
      </g>
    </svg>
  );
};

export { DoubleChevronDownIcon };
