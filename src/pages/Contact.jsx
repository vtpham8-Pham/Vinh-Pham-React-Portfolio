import usePageTitle from "../hooks/usePageTitle.js";
import Footer from "../components/Footer.jsx";
import { Hero, MAIN_ACTION } from "../components/Kit.jsx";

// booking-form (system.md, Forms): system.js validates and posts it to data-endpoint, Netlify Forms
// at "/". Field names match the static shadow form in index.html.
export default function Contact() {
  usePageTitle("Contact Vinh Pham in Tempe, Arizona");

  return (
    <>
      <main id="top">
        <Hero
          kicker="Tempe, Arizona"
          title="Contact Vinh in Tempe about AI product work"
          lead="Use the form on this page or find Vinh on LinkedIn. Messages from the form go straight to Vinh's inbox."
          secondary={{ href: "https://www.linkedin.com/in/vinhhphvm/", label: "See Vinh on LinkedIn" }}
          photo={{
            src: "/photos/friends.jpg",
            alt: "Vinh Pham with five friends under a covered patio at night",
            pos: "50% 75%",
            subject: "Vinh Pham with friends",
          }}
        />

        <section className="section" id="message" aria-labelledby="message-h">
          <div className="wrap">
            <div className="grid grid--top">
              <div className="span-5 stack-6">
                <div className="section-head">
                  <h2 id="message-h">The contact form</h2>
                  <p>Four fields: your name, your email, a subject and the message. Vinh replies to the email you give.</p>
                </div>
                <ul className="rows">
                  <li>
                    <span className="rows__name">Email<small>Opens your mail app</small></span>
                    <a className="link rows__value" href="mailto:VinhPhamBiz@gmail.com">Email Vinh</a>
                  </li>
                  <li>
                    <span className="rows__name line-icon">
                      <span className="ic-tile ic-tile--48"><img className="ic" src="/assets/icons/linkedin.svg" alt="" /></span>
                      <span>LinkedIn<small>Roles, research and updates</small></span>
                    </span>
                    <a className="link rows__value" href="https://www.linkedin.com/in/vinhhphvm/" target="_blank" rel="noopener noreferrer">
                      See Vinh on LinkedIn
                    </a>
                  </li>
                  <li>
                    <span className="rows__name line-icon">
                      <span className="ic-tile ic-tile--48"><img className="ic ic-ink" src="/assets/icons/github.svg" alt="" /></span>
                      <span>GitHub<small>Code for both projects</small></span>
                    </span>
                    <a className="link rows__value" href="https://github.com/vinhhphvm" target="_blank" rel="noopener noreferrer">
                      See the code on GitHub
                    </a>
                  </li>
                </ul>
              </div>

              <form
                className="form form-panel span-6 start-7"
                name="contact"
                method="POST"
                action="/"
                data-endpoint="/"
                data-sent="Your message to Vinh is sent. Vinh replies to the email you gave."
                data-netlify="true"
                netlify-honeypot="bot-field"
                noValidate
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>
                <div className="field">
                  <label htmlFor="f-name">Name</label>
                  <input id="f-name" name="name" type="text" autoComplete="name" required aria-describedby="f-name-err" />
                  <p className="field__error" id="f-name-err" hidden>Write your name.</p>
                </div>
                <div className="field">
                  <label htmlFor="f-email">Email</label>
                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    aria-describedby="f-email-err"
                  />
                  <p className="field__error" id="f-email-err" hidden>
                    Write an email address with an @, like name@example.com.
                  </p>
                </div>
                <div className="field">
                  <label htmlFor="f-subject">Subject</label>
                  <input id="f-subject" name="subject" type="text" autoComplete="off" required aria-describedby="f-subject-err" />
                  <p className="field__error" id="f-subject-err" hidden>Write what the message is about.</p>
                </div>
                <div className="field">
                  <label htmlFor="f-message">Message</label>
                  <textarea id="f-message" name="message" rows={4} required aria-describedby="f-message-err"></textarea>
                  <p className="field__error" id="f-message-err" hidden>Write your message.</p>
                </div>
                <div className="btn-row">
                  <button className="btn btn--primary" type="submit">
                    {MAIN_ACTION.label}
                  </button>
                </div>
                <p className="form__status" role="status" data-form-status></p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer
        close={{
          title: "Send Vinh a message",
          lead: "About a role, a project or research. Vinh is in Tempe, Arizona.",
        }}
      />
    </>
  );
}
