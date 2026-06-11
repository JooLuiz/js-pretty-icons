import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/532125/clock-two
const ClockVariantOneIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="clock-variant-1-icon"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </BaseIconSvg>
  );
};

export { ClockVariantOneIcon };
