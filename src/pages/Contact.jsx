import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vcdt1aa",
        "template_ir6mxpk",
        form.current,
        "gyWGwcXc_NEYHJTGh"
      )
      .then(() => {
        alert("Message Sent Successfully!");
      })
      .catch((error) => {
        console.log(error.text);
        alert("Failed to send message");
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">

      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-grid">

        {/* EMAIL BOX */}

        <a
          href="mailto:mniranjana963@gmail.com"
          className="contact-card"
        >
          <FaEnvelope className="contact-icon" />

          <h3>Email</h3>

          <p>mniranjana963@gmail.com</p>
        </a>

        {/* GITHUB BOX */}

        <a
          href="https://github.com/Niranjana-M"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaGithub className="contact-icon" />

          <h3>GitHub</h3>

          <p>View Profile</p>
        </a>

        {/* LINKEDIN BOX */}

        <a
          href="https://www.linkedin.com/in/niranjana-murugan"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="contact-icon" />

          <h3>LinkedIn</h3>

          <p>Connect With Me</p>
        </a>

      </div>

      {/* FORM BOX */}

      <div className="form-card">

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            <FaPaperPlane />
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}