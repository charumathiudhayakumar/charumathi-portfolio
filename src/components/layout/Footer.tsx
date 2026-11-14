import { Container } from "./Container";
export function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer-row">
          <a className="logo" href="#home">
            C<span>/</span>
          </a>
          <p>© {new Date().getFullYear()} Charu · React + TypeScript</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </Container>
    </footer>
  );
}
