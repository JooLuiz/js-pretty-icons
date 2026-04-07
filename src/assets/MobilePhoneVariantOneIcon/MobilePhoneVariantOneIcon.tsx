import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/535503/mobile
const MobilePhoneVariantOneIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`mobile-phone-variant-1-icon ${className}`}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M4 0C2.89543 0 2 0.895431 2 2V14C2 15.1046 2.89543 16 4 16H12C13.1046 16 14 15.1046 14 14V2C14 0.895431 13.1046 0 12 0H4ZM12 3H4V13H12V3Z" fill={iconColor}/>
    </svg>
  );
};

export { MobilePhoneVariantOneIcon };
