import { FiBookOpen } from "react-icons/fi";
import { Container } from "../layout/Container";
import { SectionTitle } from "../common/SectionTitle";
export function Education() {
  return (
    <section id="education" className="section">
      <Container>
        <SectionTitle
          eyebrow="Education"
          title="A foundation for continuous learning."
        />
        <article className="education-card">
          <div className="skill-icon">
            <FiBookOpen />
          </div>
          <div>
            <span className="period">2018 — 2022</span>
            <h3>Bachelor of Technology in Computer Science</h3>
            <p>University Name · India</p>
            <p className="muted">
              Coursework in software engineering, data structures, web
              technologies, and human-computer interaction.
            </p>
          </div>
        </article>
      </Container>
    </section>
  );
}
