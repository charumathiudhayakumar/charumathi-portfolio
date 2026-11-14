import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../../constants/projects";
import { Container } from "../layout/Container";
import { SectionTitle } from "../common/SectionTitle";
import { TiltCard } from "../common/TiltCard";
export function Projects() {
  return (
    <section id="projects" className="section section-deep">
      <Container>
        <SectionTitle
          eyebrow="04 / Selected work"
          title="Products shaped around people and purpose."
        />
        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 3) * 0.08 }}
              viewport={{ once: true }}
            >
              <TiltCard className={`project-card ${p.accent}`}>
                <div className="project-index">
                  0{i + 1}
                  <FiArrowUpRight />
                </div>
                <p>{p.category}</p>
                <h3>{p.title}</h3>
                <div className="project-lines">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="tags">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
