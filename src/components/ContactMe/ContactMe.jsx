import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
import whatsapp_logo from "../../img/whatsapp_logo.png";
import email_logo from "../../img/email_logo.png";

const ContactMe = () => {
  const phoneNumber = "+91 9690631673";
  const message = "Hi";
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            url={`mailto:ar981089@gmail.com`}
            iconurl={email_logo}
            text="Email"
          />

          <ContactInfoCard
            url={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
            iconurl={whatsapp_logo}
            text="Whatsapp"
          />
        </div>

        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
