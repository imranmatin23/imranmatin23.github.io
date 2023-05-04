import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Imran</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <EmailIcon />
          <LinkedInIcon />
          <GitHubIcon />
          <TwitterIcon />
        </div>
      </div>
      {/* TODO: Remove Skills section */}
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, ReactJS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              AWS, GCP
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
