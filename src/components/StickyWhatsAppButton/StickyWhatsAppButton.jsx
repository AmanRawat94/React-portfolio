import React from "react";
import "./StickyWhatsAppButton.css";

import { FaWhatsapp } from "react-icons/fa";

const StickyWhatsAppButton = () => {
  const handleClick = () => {
    const phoneNumber = "+91 9690631673";
    const message = "Hi";
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
