import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/532997/plus-large
const PlusLargeIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`plus-large-icon ${className}`}
    >
      <path d="M4 12H20M12 4V20" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export { PlusLargeIcon };
