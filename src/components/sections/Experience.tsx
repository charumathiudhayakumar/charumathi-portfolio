import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { SectionTitle } from "../common/SectionTitle";
import type { TimelineItem } from "../../types";
import { TiltCard } from "../common/TiltCard";
const items: TimelineItem[] = [
  {
    title: "Frontend Developer",
    subtitle: "AKV Technologies",
    period: "2023",
    details: [
      "Developed frontend experiences using React.js, HTML, CSS, JavaScript, TypeScript, and WordPress.",
      "Worked on MP Tours and Travel, the AKV Technologies website, Valuecodes, and Inout Space e-commerce.",
    ],
  },
  {
    title: "Software Developer",
    subtitle: "Generic Technologies",
    period: "Product development",
    details: [
      "Built product-based applications across merchant onboarding, administration, customer, and delivery workflows.",
      "Developed the Merchant Application, Onboarding Application, Admin Panel, Customer App, and Delivery Partner App using React.js and Flutter.",
    ],
  },
];
export function Experience() {
  return (
    <section id="experience" className="section">
      <Container>
        <SectionTitle
          eyebrow="03 / Experience"
          title="Product work across every screen."
        />
        <div className="experience-list">
          {items.map((item, i) => (
            <motion.div
              key={item.subtitle}
              initial={{ opacity: 0, x: i % 2 ? -26 : 26 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <TiltCard className="experience-card">
                <div className="experience-meta">
                  <span>{item.period}</span>
                  <strong>0{i + 1}</strong>
                </div>
                <h3>{item.subtitle}</h3>
                <h4>{item.title}</h4>
                <ul>
                  {item.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
