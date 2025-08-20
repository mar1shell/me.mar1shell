import type { SocialMediaIconProps } from "../../types";

/**
 * SocialMediaIcon component hugely inspired by
 * https://uiverse.io/javierBarroso/ancient-badger-33
 * I made a lot of changes to the inital code so it can be more modular and easy to add new icons
 * and also I made it support dark mode.
 * Thanks to Javier Barroso for the inspiration!
 */

function SocialMediaIcon({
  link,
  title,
  icon,
  hoveredIcon,
  index,
}: SocialMediaIconProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
      title={title}
    >
      <div className="socialcontainer interactive">
        <div className="icon social-icon-1-1">{icon}</div>
        <div className={`social-icon-${index}`}>{hoveredIcon}</div>
      </div>
    </a>
  );
}

export default SocialMediaIcon;
