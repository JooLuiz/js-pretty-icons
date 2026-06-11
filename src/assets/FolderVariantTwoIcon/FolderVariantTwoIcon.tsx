import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/535400/folder
const FolderVariantTwoIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="folder-variant-2-icon"
      viewBox="0 0 16 16"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <path d="M0 1H6L9 4H16V14H0V1Z" fill={iconColor}/>
    </BaseIconSvg>
  );
};

export { FolderVariantTwoIcon };
