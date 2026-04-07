import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/532514/pause
const PauseIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pause-icon ${className}`}
    >
      <path d="M8 5V19M16 5V19" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export { PauseIcon };
