import React from "react";
import "./ContactInfoCard.css";
import { Link } from "react-router-dom";

const ContactInfoCard = ({ iconurl, text, url }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <Link to={url}>
          <img src={iconurl} alt={text} />
        </Link>
      </div>

      <p>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
