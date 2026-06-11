import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/510957/download
const DownloadVariantTwoIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="download-variant-2-icon"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <g id="Interface / Download">
      <path id="Vector" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </BaseIconSvg>
  );
};

export { DownloadVariantTwoIcon };
