import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/487963/upload
const UploadVariantTwoIcon = ({ width, height, color, className }: IconProps) => {
  const iconFill = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`upload-variant-2-icon ${className}`}
    >
      <path d="M4,20H20a1,1,0,0,1,0,2H4a1,1,0,0,1,0-2Zm9-3V5.414l2.293,2.293a1,1,0,0,0,1.414-1.414l-4-4a1,1,0,0,0-.325-.216.986.986,0,0,0-.764,0,1,1,0,0,0-.325.216l-4,4A1,1,0,1,0,8.707,7.707L11,5.414V17a1,1,0,0,0,2,0Z" fill={iconFill}/>
    </svg>
  );
};

export { UploadVariantTwoIcon };
