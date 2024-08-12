import React from "react";
import ContactMe from "../../components/ContactMe/ContactMe";
import Navbar from "../../components/Navbar/Navbar";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="contact-page-container">
        <ContactMe />
      </div>
    </>
  );
};

export default ContactPage;
