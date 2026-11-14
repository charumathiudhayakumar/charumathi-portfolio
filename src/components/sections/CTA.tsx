import { FiArrowRight } from "react-icons/fi";
import { Container } from "../layout/Container";
import { Button } from "../common/Button";
export function CTA() {
  return (
    <section className="section compact">
      <Container>
        <div className="cta-card">
          <span>Have a project in mind?</span>
          <h2>Let’s build something meaningful together.</h2>
          <p>
            I’m always interested in thoughtful products, ambitious teams, and
            good conversations.
          </p>
          <Button href="#contact">
            Start a conversation <FiArrowRight />
          </Button>
        </div>
      </Container>
    </section>
  );
}
