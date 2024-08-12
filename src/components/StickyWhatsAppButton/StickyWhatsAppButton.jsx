import React from "react";
import "./StickyWhatsAppButton.css";

import { FaWhatsapp } from "react-icons/fa";

const StickyWhatsAppButton = () => {
  const handleClick = () => {
    const phoneNumber = "+91 8791273578";
    const message = "Hello, I would like to hire you for a project!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <button className="sticky-whatsapp-button" onClick={handleClick}>
      <FaWhatsapp />
    </button>
  );
};

export default StickyWhatsAppButton;
