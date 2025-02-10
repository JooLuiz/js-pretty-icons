import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/532273/heart-half
const HalfHeartIcon = ({ width, height, color }: IconProps) => {
  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5.99998V20C11.9544 20.0006 11.9087 19.9942 11.8652 19.9812C11.7699 19.9529 11.6882 19.8808 11.5249 19.7366C10.0648 18.4476 5.60984 14.4652 4.13778 12.5769C2.36727 10.3059 2.68468 7.09531 4.93923 5.17507C7.19377 3.25483 10.2006 3.90296 12 5.99998Z"
        stroke={color ? color : "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { HalfHeartIcon };
