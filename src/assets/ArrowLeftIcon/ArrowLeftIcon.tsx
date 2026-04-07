import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/533620/arrow-sm-left
const ArrowLeftIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`arrow-left-icon ${className}`}
    >
      <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export { ArrowLeftIcon };
