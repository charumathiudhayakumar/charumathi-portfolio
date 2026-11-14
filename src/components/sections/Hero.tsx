import { motion } from "framer-motion";
import { FiArrowDownRight, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import {
  SiReact,
  SiFlutter,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { Container } from "../layout/Container";
import { Button } from "../common/Button";
import { socialLinks } from "../../constants/social";
import profileImage from "../../assets/images/Professional Software Developer at Work-1mb.jpeg";

const orbitIcons = [
  { Icon: SiReact, label: "React", className: "orbit-react" },
  { Icon: SiFlutter, label: "Flutter", className: "orbit-flutter" },
  { Icon: SiJavascript, label: "JavaScript", className: "orbit-js" },
  { Icon: SiTypescript, label: "TypeScript", className: "orbit-ts" },
  { Icon: SiHtml5, label: "HTML", className: "orbit-html" },
  { Icon: SiCss, label: "CSS", className: "orbit-css" },
];

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-cosmos" aria-hidden="true">
        <i />
        <i />
        <i />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <Container>
        <div className="hero-stage">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow-pill">
              <i /> Software developer · 3 years experience
            </div>
            <p className="greeting">Hello, I’m Charu.</p>
            <h1>
              Building digital
              <br />
              <span>experiences that move.</span>
            </h1>
            <p className="hero-summary">
              Frontend and Flutter developer creating responsive web and mobile
              products with considered interactions, clean code, and a sharp
              visual eye.
            </p>
            <div className="hero-buttons">
              <Button href="#projects">
                Explore my work <FiArrowDownRight />
              </Button>
              <Button href="#contact" variant="secondary">
                Let’s connect
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="orbit-scene"
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            aria-label="Technology orbit around Charu's profile"
          >
            <div className="orbit-ring orbit-ring-one" />
            <div className="orbit-ring orbit-ring-two" />
            <motion.div
              className="profile-sphere"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src={profileImage} alt="Charu, software developer" />
              <div className="sphere-shine" />
            </motion.div>
            {orbitIcons.map(({ Icon, label, className }) => (
              <div className={`orbit-icon ${className}`} key={label}>
                <div title={label}>
                  <Icon />
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="hero-linkbar"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <span>Find me online</span>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedinIn />
            LinkedIn
          </a>
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            <FaGithub />
            GitHub
          </a>
          <a
            href="/charumathi-resume.pdf"
            download="Charumathi-Resume.pdf"
            type="application/pdf"
          >
            <FiDownload />
            Resume
          </a>
        </motion.div>
      </Container>
      <a href="#about" className="scroll-cue" aria-label="Scroll to About">
        <span />
        Scroll
      </a>
    </section>
  );
}
