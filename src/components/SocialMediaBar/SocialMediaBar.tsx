import "./SocialMediaBar.css";
import { SocialMediaIcons } from "../../data";
import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon";

export default function SocialMediaBar() {
  return (
    <div className="social-login-icons">
      {SocialMediaIcons.map((socialLink, index) => (
        <SocialMediaIcon
          link={socialLink.link}
          title={socialLink.title}
          icon={socialLink.icon}
          hoveredIcon={socialLink.hoveredIcon}
          key={index}
          index={socialLink.index}
        />
      ))}
    </div>
  );
}
