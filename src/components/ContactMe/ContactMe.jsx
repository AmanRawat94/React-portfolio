import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
import whatsapp_logo from "../../img/whatsapp_logo.png";
import skype_logo from "../../img/skype_logo.png";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            url={`https://join.skype.com/invite/wpd8wRRxVUkB`}
            iconurl={skype_logo}
            text="Skype"
          />
          <ContactInfoCard
            url={`https://wa.me/919258902271`}
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
