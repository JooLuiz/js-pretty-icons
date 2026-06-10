import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/361653/vercel-logo
const VercelVariantOneIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`vercel-variant-1-icon ${className}`}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M7.49998 1L6.92321 2.00307L1.17498 12L0.599976 13H1.7535H13.2464H14.4L13.825 12L8.07674 2.00307L7.49998 1ZM7.49998 3.00613L2.3285 12H12.6714L7.49998 3.00613Z" fill={iconColor} />
    </svg>
  );
};

export { VercelVariantOneIcon };
