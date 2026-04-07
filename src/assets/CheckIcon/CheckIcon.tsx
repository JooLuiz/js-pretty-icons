import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/532154/check
const CheckIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`check-icon ${className}`}
    >
      <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export { CheckIcon };
