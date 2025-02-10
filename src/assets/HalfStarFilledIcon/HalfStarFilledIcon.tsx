import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/535662/star-half
const HalfStarFilledIcon = ({ width, height, color }: IconProps) => {
  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L8.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682Z"
        fill={color ? color : "#000000"}
      />
    </svg>
  );
};

export { HalfStarFilledIcon };
