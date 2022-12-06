import React from "react";

function ContactItemImages({ imageUrl }) {
  return (
    <div className="contact-item__images">
      <img src={imageUrl} alt="contact avatar" />
    </div>
  );
}

export default ContactItemImages;