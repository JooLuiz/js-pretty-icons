import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/507712/git-commit
const GitCommitVariantOneIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`git-commit-variant-1-icon ${className}`}
    >
      <path d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z" stroke={iconColor} strokeWidth="2" />
      <path d="M3 12L9 12" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 12L21 12" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export { GitCommitVariantOneIcon };
