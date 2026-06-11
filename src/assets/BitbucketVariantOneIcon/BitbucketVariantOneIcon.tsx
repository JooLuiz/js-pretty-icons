import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/473559/bitbucket
const BitbucketVariantOneIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="bitbucket-variant-1-icon"
      viewBox="0 0 32 32"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <path d="M19.154 20.418h-6.256l-1.692-8.842h9.464zM1.954 2.498c-0.004-0-0.008-0-0.013-0-0.531 0-0.961 0.43-0.961 0.961 0 0.055 0.005 0.109 0.013 0.161l-0.001-0.006 4.084 24.795c0.107 0.62 0.638 1.086 1.279 1.093h19.595c0.003 0 0.007 0 0.010 0 0.478 0 0.875-0.347 0.953-0.803l0.001-0.006 4.093-25.071c0.008-0.046 0.012-0.1 0.012-0.154 0-0.531-0.43-0.961-0.961-0.961-0.004 0-0.009 0-0.013 0h0.001z" fill={iconColor}></path>
    </BaseIconSvg>
  );
};

export { BitbucketVariantOneIcon };
