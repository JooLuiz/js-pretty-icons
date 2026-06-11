import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/532195/menu
const MenuIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  return (
    <BaseIconSvg
      baseClassName="menu-icon"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke={color ? color : "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIconSvg>
  );
};

export { MenuIcon };
