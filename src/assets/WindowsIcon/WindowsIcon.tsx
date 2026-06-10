import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/503430/microsoft-windows
const WindowsIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`windows-icon ${className}`}
    >
      <rect width="24" height="24" fill="none" />
      <path d="M3,12V6.75L9,5.43v6.48L3,12M20,3v8.75L10,11.9V5.21L20,3M3,13l6,.09V19.9L3,18.75V13m17,.25V22L10,20.09v-7Z" fill={iconColor} />
    </svg>
  );
};

export { WindowsIcon };
