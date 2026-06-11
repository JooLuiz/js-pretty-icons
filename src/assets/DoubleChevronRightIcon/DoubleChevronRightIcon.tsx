import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/486650/double-chevron-right
const DoubleChevronRightIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconFill = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="double-chevron-right-icon"
      viewBox="0 0 512 512"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <g fill={iconFill} transform="translate(123.520000, 134.186667)">
          <path d="M158.293333,0 L279.893333,121.813333 L158.293333,243.626667 L128,213.333333 L219.733333,121.813333 L128,30.2933333 L158.293333,0 Z M30.2933333,0 L151.893333,121.813333 L30.2933333,243.626667 L-1.42108547e-14,213.333333 L91.7333333,121.813333 L-1.42108547e-14,30.2933333 L30.2933333,0 Z" />
        </g>
      </g>
    </BaseIconSvg>
  );
};

export { DoubleChevronRightIcon };
