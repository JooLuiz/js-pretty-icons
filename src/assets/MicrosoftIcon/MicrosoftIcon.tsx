import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/512487/microsoft-150
const MicrosoftIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="microsoft-icon"
      viewBox="0 0 20 20"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-220.000000, -7519.000000)" fill={iconColor}>
      <g transform="translate(56.000000, 160.000000)">
      <path d="M174,7379 L184,7379 L184,7370 L174,7370 L174,7379 Z M164,7379 L173,7379 L173,7370 L164,7370 L164,7379 Z M174,7369 L184,7369 L184,7359 L174,7359 L174,7369 Z M164,7369 L173,7369 L173,7359 L164,7359 L164,7369 Z" fill={iconColor}>
      </path>
      </g>
      </g>
      </g>
    </BaseIconSvg>
  );
};

export { MicrosoftIcon };
