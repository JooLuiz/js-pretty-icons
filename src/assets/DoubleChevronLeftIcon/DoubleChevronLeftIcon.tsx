import { IconProps } from "../../types/shared";

//Icon Link:
const DoubleChevronLeftIcon = ({
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
      className={`double-chevron-left-icon ${className}`}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <g fill={iconFill} transform="translate(108.603733, 134.171733)">
          <path d="M127.978667,121.834667 L249.6,243.648 L279.872,213.333333 L188.16,121.834667 L279.872,30.3146667 L249.6,2.84217094e-14 L127.978667,121.834667 Z M1.42108547e-14,121.834667 L121.578667,243.648 L151.872,213.333333 L60.1386667,121.834667 L151.872,30.3146667 L121.578667,2.84217094e-14 L1.42108547e-14,121.834667 Z" />
        </g>
      </g>
    </svg>
  );
};

export { DoubleChevronLeftIcon };
