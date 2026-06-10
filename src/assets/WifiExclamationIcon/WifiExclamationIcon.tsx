import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/533744/wifi-exclamation
const WifiExclamationIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`wifi-exclamation-icon ${className}`}
    >
      <path d="M12 19.5001H12.01M2 8.81954C3.69692 7.30075 5.74166 6.1626 8 5.5393M5 12.8586C5.86251 12.0131 6.87754 11.3226 8 10.8322M16 5.5393C18.2583 6.1626 20.3031 7.30075 22 8.81954M16 10.8322C17.1225 11.3226 18.1375 12.0131 19 12.8586M12 4.50024V15.5001" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export { WifiExclamationIcon };
