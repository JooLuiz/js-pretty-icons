import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/513005/twitch-182
const TwitchIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="twitch-icon"
      viewBox="-0.5 0 20 20"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-141.000000, -7399.000000)" fill={iconColor}>
      <g transform="translate(56.000000, 160.000000)">
      <path d="M97,7249 L99,7249 L99,7244 L97,7244 L97,7249 Z M92,7249 L94,7249 L94,7244 L92,7244 L92,7249 Z M102,7250.307 L102,7241 L88,7241 L88,7253 L92,7253 L92,7255.953 L94.56,7253 L99.34,7253 L102,7250.307 Z M98.907,7256 L94.993,7256 L92.387,7259 L90,7259 L90,7256 L85,7256 L85,7242.48 L86.3,7239 L104,7239 L104,7251.173 L98.907,7256 Z" fill={iconColor}>
      </path>
      </g>
      </g>
      </g>
    </BaseIconSvg>
  );
};

export { TwitchIcon };
