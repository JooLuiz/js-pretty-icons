import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/533744/wifi-exclamation
const WifiExclamationIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="wifi-exclamation-icon"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <path d="M12 19.5001H12.01M2 8.81954C3.69692 7.30075 5.74166 6.1626 8 5.5393M5 12.8586C5.86251 12.0131 6.87754 11.3226 8 10.8322M16 5.5393C18.2583 6.1626 20.3031 7.30075 22 8.81954M16 10.8322C17.1225 11.3226 18.1375 12.0131 19 12.8586M12 4.50024V15.5001" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </BaseIconSvg>
  );
};

export { WifiExclamationIcon };
