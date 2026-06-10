import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/533323/code-alt
const CodeVariantOneIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`code-variant-1-icon ${className}`}
    >
      <path d="M9 8L5 11.6923L9 16M15 8L19 11.6923L15 16" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export { CodeVariantOneIcon };
