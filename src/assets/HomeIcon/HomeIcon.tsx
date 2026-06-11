import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/535437/home
const HomeIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  return (
    <BaseIconSvg
      baseClassName="home-icon"
      viewBox="0 0 16 16"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <path
        d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
        fill={color ? color : "#000000"}
      />
    </BaseIconSvg>
  );
};

export { HomeIcon };
