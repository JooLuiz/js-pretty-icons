import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/532898/wifi-weak
const WifiVeryLowIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`wifi-very-low-icon ${className}`}
    >
      <path d="M12 20H12.01" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export { WifiVeryLowIcon };
