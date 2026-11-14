import { useEffect, useState, type FormEvent } from "react";
import {
  FiAlertCircle,
  FiCheck,
  FiLoader,
  FiMail,
  FiSend,
} from "react-icons/fi";
import { Container } from "../layout/Container";
import { SectionTitle } from "../common/SectionTitle";
import { socialLinks } from "../../constants/social";

type FormStatus = "idle" | "sending" | "success" | "error";
const formEndpoint = "https://formsubmit.co/ajax/charuudhaya512@gmail.com";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (status !== "success") return;
    const timeout = window.setTimeout(() => setStatus("idle"), 4000);
    return () => window.clearTimeout(timeout);
  }, [status]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("_honey")) return;

    setStatus("sending");
    setErrorMessage("");
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          _replyto: data.get("email"),
          _subject: data.get("subject"),
          message: data.get("message"),
          _template: "table",
          _url: window.location.href,
        }),
      });
      const result = (await response.json()) as {
        success?: boolean | string;
        message?: string;
      };
      if (
        !response.ok ||
        result.success === false ||
        result.success === "false"
      ) {
        throw new Error(
          result.message || "The email service rejected the message.",
        );
      }
      setStatus("success");
      form.reset();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "The email service is unavailable.",
      );
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <Container>
        <div className="contact-grid">
          <div>
            <SectionTitle
              eyebrow="05 / Contact"
              title="Have a product in mind? Let’s start a conversation."
              copy="I’m interested in frontend and Flutter opportunities where thoughtful design and solid engineering matter."
            />
            <a className="contact-email" href={socialLinks.email}>
              <FiMail /> charuudhaya512@gmail.com
            </a>
            <p className="contact-note">
              Your message will be delivered directly to my inbox. The first
              submission requires a one-time inbox confirmation to activate
              secure delivery.
            </p>
          </div>
          <form onSubmit={submit}>
            <input
              className="honey-field"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <label>
              Name
              <input
                required
                name="name"
                autoComplete="name"
                placeholder="Your name"
              />
            </label>
            <label>
              Your email
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@company.com"
              />
            </label>
            <label>
              Subject
              <input
                required
                name="subject"
                placeholder="Project opportunity"
              />
            </label>
            <label>
              Message
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about the opportunity..."
              />
            </label>
            <button
              className="button button-primary"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>
                  <FiLoader className="spin" /> Sending...
                </>
              ) : (
                <>
                  <FiSend /> Send message
                </>
              )}
            </button>
            <div className="form-status" aria-live="polite">
              {status === "success" && (
                <span className="status-success">
                  <FiCheck /> Message submitted successfully.
                </span>
              )}
              {status === "error" && (
                <span className="status-error">
                  <FiAlertCircle /> {errorMessage}
                </span>
              )}
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
