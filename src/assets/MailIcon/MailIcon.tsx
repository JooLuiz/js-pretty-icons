import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/513836/mail
const MailIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`mail-icon ${className}`}
    >
      <title/>
      <g id="Complete">
      <g id="mail">
      <g>
      <polyline fill="none" points="4 8.2 12 14.1 20 8.2" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
      <rect fill="none" height="14" rx="2" ry="2" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="6.5"/>
      </g>
      </g>
      </g>
    </svg>
  );
};

export { MailIcon };
