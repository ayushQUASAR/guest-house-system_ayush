import React from "react";
import "./EmbeddedMap.css";

const EmbeddedMap = () => {
  return (
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.19249697016!2d75.53504382450438!3d31.393631141683848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51d255451cc1%3A0x88f5db114ceede54!2sGuest%20House%2C%20Grand%20Trunk%20Rd%2C%20Punjab%20144004!5e0!3m2!1sen!2sin!4v1709289941892!5m2!1sen!2sin" width="600px" height="450px" className="mapContact" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  );
};

export default EmbeddedMap;
