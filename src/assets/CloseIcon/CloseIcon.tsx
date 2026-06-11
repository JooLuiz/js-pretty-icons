import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/522506/close
const CloseIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconStroke = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="close-icon"
      viewBox="-0.5 0 25 25"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <path
        d="M3 21.32L21 3.32001"
        stroke={iconStroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 3.32001L21 21.32"
        stroke={iconStroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIconSvg>
  );
};

export { CloseIcon };
