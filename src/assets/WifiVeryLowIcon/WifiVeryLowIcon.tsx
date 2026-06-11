import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/532898/wifi-weak
const WifiVeryLowIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="wifi-very-low-icon"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <path d="M12 20H12.01" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </BaseIconSvg>
  );
};

export { WifiVeryLowIcon };
