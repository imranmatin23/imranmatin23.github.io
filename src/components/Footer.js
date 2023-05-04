import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <EmailIcon />
        <LinkedInIcon />
        <GitHubIcon />
        <TwitterIcon />
      </div>
      <p> &copy; 2023 Imran Matin</p>
    </div>
  );
}

export default Footer;
