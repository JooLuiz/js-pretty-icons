import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/533623/arrow-sm-up
const ArrowUpIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`arrow-up-icon ${className}`}
    >
      <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export { ArrowUpIcon };
