import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/533323/code-alt
const CodeVariantOneIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="code-variant-1-icon"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <path d="M9 8L5 11.6923L9 16M15 8L19 11.6923L15 16" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </BaseIconSvg>
  );
};

export { CodeVariantOneIcon };
