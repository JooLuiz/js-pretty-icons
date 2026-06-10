import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/532895/wifi-fair
const WifiLowIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`wifi-low-icon ${className}`}
    >
      <path d="M12.0001 20H12.0101M15.3635 16.3003C14.4754 15.4924 13.2953 15 12.0001 15C10.705 15 9.52483 15.4924 8.63672 16.3003" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export { WifiLowIcon };
