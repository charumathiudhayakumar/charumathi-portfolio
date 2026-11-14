import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { socialLinks } from "../../constants/social";
export function SocialLinks() {
  return (
    <div className="social-links">
      <a href={socialLinks.github} aria-label="GitHub">
        <FaGithub />
      </a>
      <a href={socialLinks.linkedin} aria-label="LinkedIn">
        <FaLinkedinIn />
      </a>
    </div>
  );
}
