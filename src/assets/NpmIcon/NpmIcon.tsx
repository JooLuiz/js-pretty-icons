import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/378441/npm-fill
const NpmIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`npm-icon ${className}`}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M24 0H0V24H24V0ZM2.57764 2.57758H21.4214V21.4214H16.6694V7.32957H11.9175V21.4214H2.57764V2.57758Z" fill={iconColor} />
    </svg>
  );
};

export { NpmIcon };
