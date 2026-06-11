import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/533623/arrow-sm-up
const ArrowUpIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="arrow-up-icon"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </BaseIconSvg>
  );
};

export { ArrowUpIcon };
