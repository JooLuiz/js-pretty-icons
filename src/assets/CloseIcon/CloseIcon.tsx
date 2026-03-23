import { IconProps } from "../../types/shared";

//Icon Link:
const CloseIcon = ({ width, height, color, className }: IconProps) => {
  const iconStroke = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="-0.5 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`close-icon ${className}`}
    >
      <path
        d="M3 21.32L21 3.32001"
        stroke={iconStroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 3.32001L21 21.32"
        stroke={iconStroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { CloseIcon };
