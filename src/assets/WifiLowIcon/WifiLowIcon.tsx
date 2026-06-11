import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/532895/wifi-fair
const WifiLowIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="wifi-low-icon"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <path d="M12.0001 20H12.0101M15.3635 16.3003C14.4754 15.4924 13.2953 15 12.0001 15C10.705 15 9.52483 15.4924 8.63672 16.3003" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
    </BaseIconSvg>
  );
};

export { WifiLowIcon };
