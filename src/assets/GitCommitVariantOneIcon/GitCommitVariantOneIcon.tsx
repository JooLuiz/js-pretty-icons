import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/507712/git-commit
const GitCommitVariantOneIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="git-commit-variant-1-icon"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <path d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z" stroke={iconColor} strokeWidth="2" />
      <path d="M3 12L9 12" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 12L21 12" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </BaseIconSvg>
  );
};

export { GitCommitVariantOneIcon };
