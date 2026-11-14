import { motion } from "framer-motion";
import { FiCode, FiSmartphone, FiTool } from "react-icons/fi";
import { skillGroups } from "../../constants/skills";
import { Container } from "../layout/Container";
import { SectionTitle } from "../common/SectionTitle";
import { TiltCard } from "../common/TiltCard";
const icons = [FiCode, FiSmartphone, FiTool];
export function Skills() {
  return (
    <section id="skills" className="section section-deep">
      <Container>
        <SectionTitle
          eyebrow="02 / Skills"
          title="A focused toolkit for web and mobile."
        />
        <div className="skills-grid">
          {skillGroups.map((group, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <TiltCard className="skill-card">
                  <div className="skill-icon">
                    <Icon />
                  </div>
                  <span className="card-number">0{i + 1}</span>
                  <h3>{group.title}</h3>
                  <div className="tags">
                    {group.skills.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
