import { FiAward } from "react-icons/fi";
import { Container } from "../layout/Container";
import { SectionTitle } from "../common/SectionTitle";
export function Certifications() {
  return (
    <section className="section compact">
      <Container>
        <SectionTitle
          eyebrow="Learning"
          title="Certifications & continued growth."
        />
        <div className="cert-grid">
          {[
            "Meta Front-End Developer",
            "Google UX Design Foundations",
            "JavaScript Algorithms & Data Structures",
          ].map((c, i) => (
            <article key={c}>
              <FiAward />
              <div>
                <h3>{c}</h3>
                <p>
                  {i === 0
                    ? "Coursera · 2024"
                    : i === 1
                      ? "Google · 2023"
                      : "freeCodeCamp · 2023"}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
