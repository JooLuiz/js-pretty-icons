import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/533621/arrow-sm-right
const ArrowRightIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="arrow-right-icon"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </BaseIconSvg>
  );
};

export { ArrowRightIcon };
