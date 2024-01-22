import React from "react";
import "./EmbeddedMap.css";

const EmbeddedMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1702.8625978438174!2d75.536049!3d31.394140000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51e8dbeafccb%3A0xe314509b2828bbbf!2sCANARA%20BANK%20-%20DR.%20AMBEDKAR%20NIIT!5e0!3m2!1sen!2sin!4v1705930210338!5m2!1sen!2sin"
      height="300px"
      width = "1000px"
      className="mapContact"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default EmbeddedMap;
