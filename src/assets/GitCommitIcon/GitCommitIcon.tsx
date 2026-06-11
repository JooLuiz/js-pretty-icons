import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/507316/git-commit
const GitCommitIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="git-commit-icon"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M3 13H8.12602C8.57006 14.7252 10.1362 16 12 16C13.8638 16 15.4299 14.7252 15.874 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H15.874C15.4299 9.27477 13.8638 8 12 8C10.1362 8 8.57006 9.27477 8.12602 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13Z" fill={iconColor} />
    </BaseIconSvg>
  );
};

export { GitCommitIcon };
