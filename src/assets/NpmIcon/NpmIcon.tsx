import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/378441/npm-fill
const NpmIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="npm-icon"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M24 0H0V24H24V0ZM2.57764 2.57758H21.4214V21.4214H16.6694V7.32957H11.9175V21.4214H2.57764V2.57758Z" fill={iconColor} />
    </BaseIconSvg>
  );
};

export { NpmIcon };
