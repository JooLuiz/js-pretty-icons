import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/378475/vercel-fill
const VercelIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`vercel-icon ${className}`}
    >
      <path d="M12 1L24 22H0L12 1Z" fill={iconColor} />
    </svg>
  );
};

export { VercelIcon };
