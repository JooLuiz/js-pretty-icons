import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/510957/download
const DownloadVariantTwoIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`download-variant-2-icon ${className}`}
    >
      <g id="Interface / Download">
      <path id="Vector" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  );
};

export { DownloadVariantTwoIcon };
