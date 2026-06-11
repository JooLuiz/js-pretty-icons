import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/535503/mobile
const MobilePhoneVariantOneIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="mobile-phone-variant-1-icon"
      viewBox="0 0 16 16"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M4 0C2.89543 0 2 0.895431 2 2V14C2 15.1046 2.89543 16 4 16H12C13.1046 16 14 15.1046 14 14V2C14 0.895431 13.1046 0 12 0H4ZM12 3H4V13H12V3Z" fill={iconColor}/>
    </BaseIconSvg>
  );
};

export { MobilePhoneVariantOneIcon };
