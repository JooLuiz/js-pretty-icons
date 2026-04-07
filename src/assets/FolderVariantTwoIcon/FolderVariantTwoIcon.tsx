import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/535400/folder
const FolderVariantTwoIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`folder-variant-2-icon ${className}`}
    >
      <path d="M0 1H6L9 4H16V14H0V1Z" fill={iconColor}/>
    </svg>
  );
};

export { FolderVariantTwoIcon };
