import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/522184/minus
const MinusIcon = ({ width, height, color, className }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox="0 -12 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`minus-icon ${className}`}
    >
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Icon-Set-Filled" transform="translate(-414.000000, -1049.000000)" fill={iconColor}>
                  <path d="M442,1049 L418,1049 C415.791,1049 414,1050.79 414,1053 C414,1055.21 415.791,1057 418,1057 L442,1057 C444.209,1057 446,1055.21 446,1053 C446,1050.79 444.209,1049 442,1049" id="minus">
      </path>
              </g>
          </g>
    </svg>
  );
};

export { MinusIcon };
