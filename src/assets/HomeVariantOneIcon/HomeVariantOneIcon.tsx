import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/535439/home-1
const HomeVariantOneIcon = ({ width, height, color, className }: IconProps) => {
  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`home-variant-1-icon ${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0L0 6V8H1V15H4V10H7V15H15V8H16V6L14 4.5V1H11V2.25L8 0ZM9 10H12V13H9V10Z"
        fill={color ? color : "#000000"}
      />
    </svg>
  );
};

export { HomeVariantOneIcon };
