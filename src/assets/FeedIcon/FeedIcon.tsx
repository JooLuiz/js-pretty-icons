import { BaseIconSvg } from "../../components/BaseIconSvg";
import { IconProps } from "../../types/shared";

//Icon Link: https://www.svgrepo.com/svg/421094/blog-feed-media
const FeedIcon = ({ width, height, color, className, ariaLabel, title }: IconProps) => {
  const iconColor = color ? color : "#000000";

  return (
    <BaseIconSvg
      baseClassName="feed-icon"
      viewBox="0 0 96 96"
      width={width}
      height={height}
      className={className}
      ariaLabel={ariaLabel}
      title={title}
    >
      <title />
      <g>
      <path d="M12,72A12,12,0,1,0,24,84,12.0119,12.0119,0,0,0,12,72Z" fill={iconColor} />
      <path d="M12,36a6,6,0,0,0,0,12A36.0393,36.0393,0,0,1,48,84a6,6,0,0,0,12,0A48.0512,48.0512,0,0,0,12,36Z" fill={iconColor} />
      <path d="M12,0a6,6,0,0,0,0,12A72.0788,72.0788,0,0,1,84,84a6,6,0,0,0,12,0A84.0981,84.0981,0,0,0,12,0Z" fill={iconColor} />
      </g>
    </BaseIconSvg>
  );
};

export { FeedIcon };
