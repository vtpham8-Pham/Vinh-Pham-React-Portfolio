import usePageTitle from "../hooks/usePageTitle.js";
import FadeInSection from "../components/FadeInSection.jsx";

export default function Contact() {
  usePageTitle("Contact");

  return (
    <>
      <section className="hero-split">
        <div className="hero-left">
          <h1>Contact</h1>
          <p>
            If you&rsquo;d like to connect, collaborate, or learn more about my
            work, feel free to reach out via VinhPhamBiz@gmail.com
          </p>
        </div>

        <div className="hero-right">
          <h2>CONTACT</h2>
        </div>
      </section>

      <FadeInSection className="content-section">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send message</button>
        </form>
      </FadeInSection>
    </>
  );
}
