import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/533653/chevron-down
const ChevronDownIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  return (
    <BaseIconSvg
      baseClassName="chevron-down-icon"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke={color ? color : "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIconSvg>
  );
};

export { ChevronDownIcon };
