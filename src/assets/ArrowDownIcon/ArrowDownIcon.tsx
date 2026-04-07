import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/533619/arrow-sm-down
const ArrowDownIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`arrow-down-icon ${className}`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
      <g id="SVGRepo_iconCarrier"> <path d="M12 6V18M12 18L7 13M12 18L17 13" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
    </svg>
  );
};

export { ArrowDownIcon };
