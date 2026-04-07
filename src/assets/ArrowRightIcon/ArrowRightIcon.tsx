import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/533621/arrow-sm-right
const ArrowRightIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`arrow-right-icon ${className}`}
    >
      <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export { ArrowRightIcon };
