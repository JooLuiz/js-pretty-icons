import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/522368/camera
const CameraVariantFourIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`camera-variant-4-icon ${className}`}
    >
      <g clipPath="url(#clip0_15_137)">
        <path
          d="M3 8C3 7.44772 3.44772 7 4 7H8.5L9.5 4H14.5L15.5 7H20C20.5523 7 21 7.44772 21 8V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V8Z"
          stroke={iconColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="13" r="3" stroke={iconColor} strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_15_137">
          <rect width="24" height="24" fill="none" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { CameraVariantFourIcon };
