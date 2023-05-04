import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* TODO: Use Icons */}
        <p>Email</p>
        <p>LinkedIn</p>
        <p>Github</p>
        <p>Twitter</p>
      </div>
      <p> &copy; 2023 Imran Matin</p>
    </div>
  );
}

export default Footer;
