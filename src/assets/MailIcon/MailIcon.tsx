import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/513836/mail
const MailIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="mail-icon"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <title/>
      <g id="Complete">
      <g id="mail">
      <g>
      <polyline fill="none" points="4 8.2 12 14.1 20 8.2" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
      <rect fill="none" height="14" rx="2" ry="2" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="6.5"/>
      </g>
      </g>
      </g>
    </BaseIconSvg>
  );
};

export { MailIcon };
