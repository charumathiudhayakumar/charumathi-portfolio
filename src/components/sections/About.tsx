import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { SectionTitle } from "../common/SectionTitle";
import { TiltCard } from "../common/TiltCard";
export function About() {
  return (
    <section id="about" className="section">
      <Container>
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionTitle
              eyebrow="01 / About"
              title="Design-aware development, built for real products."
            />
            <p className="large-copy">
              I’m a software developer with three years of experience turning
              product requirements into reliable, polished interfaces.
            </p>
          </motion.div>
          <TiltCard className="about-panel">
            <p>
              My focus is frontend development with React.js, JavaScript, and
              TypeScript, alongside cross-platform mobile work in Flutter. I
              enjoy making complex workflows feel clear across web, admin,
              merchant, customer, and delivery experiences.
            </p>
            <div className="metric">
              <strong>3</strong>
              <span>
                years of
                <br />
                experience
              </span>
            </div>
          </TiltCard>
        </div>
      </Container>
    </section>
  );
}
