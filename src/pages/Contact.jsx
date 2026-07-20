import { useState } from "react";
import usePageTitle from "../hooks/usePageTitle.js";
import FadeInSection from "../components/FadeInSection.jsx";

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

export default function Contact() {
  usePageTitle("Contact");
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => {
        setStatus("success");
        form.reset();
      })
      .catch(() => setStatus("error"));
  }

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
        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don&rsquo;t fill this out if you&rsquo;re human:
              <input name="bot-field" />
            </label>
          </p>

          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "success" && (
            <p className="form-status form-status-success">
              Message sent &mdash; I&rsquo;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="form-status form-status-error">
              Something went wrong. Email me directly at VinhPhamBiz@gmail.com.
            </p>
          )}
        </form>
      </FadeInSection>
    </>
  );
}
