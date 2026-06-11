import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/445733/exclamation-point
const ExclamationMarkIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconFill = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="exclamation-mark-icon"
      viewBox="0 0 64 64"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <path
        fillRule="nonzero"
        d="M34.476,42.174l-5.464,0l-0.425,-34.192l6.348,0l-0.459,34.192Zm-6.118,10.405c0,-0.981 0.3,-1.805 0.9,-2.47c0.599,-0.665 1.488,-0.998 2.666,-0.998c1.178,0 2.073,0.333 2.683,0.998c0.611,0.665 0.916,1.489 0.916,2.47c0,0.982 -0.305,1.794 -0.916,2.438c-0.61,0.643 -1.505,0.965 -2.683,0.965c-1.178,0 -2.067,-0.322 -2.666,-0.965c-0.6,-0.644 -0.9,-1.456 -0.9,-2.438Z"
        fill={iconFill}
      />
    </BaseIconSvg>
  );
};

export { ExclamationMarkIcon };
