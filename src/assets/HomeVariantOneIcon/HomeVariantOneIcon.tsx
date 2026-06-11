import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/535439/home-1
const HomeVariantOneIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  return (
    <BaseIconSvg
      baseClassName="home-variant-1-icon"
      viewBox="0 0 16 16"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0L0 6V8H1V15H4V10H7V15H15V8H16V6L14 4.5V1H11V2.25L8 0ZM9 10H12V13H9V10Z"
        fill={color ? color : "#000000"}
      />
    </BaseIconSvg>
  );
};

export { HomeVariantOneIcon };
