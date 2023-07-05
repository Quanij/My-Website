import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <header className="App-header">
        <h1>Ajani Anderson</h1>
        <img
          src="/profilePic.png"
          alt="Ajani Anderson"
          className="profile-picture"
        />
        <p>Software Engineer</p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/ajanianderson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://www.github.com/quanij"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={40} />
          </a>
        </div>
        <div className="buttons">
          <div className="button">
            <Link to="/education" className="btn btn-primary mr-2">
              Education
            </Link>
          </div>
          <div className="button">
            <Link to="/experience" className="btn btn-primary mr-2">
              Experience
            </Link>
          </div>
          <div className="button">
            <Link to="/skills" className="btn btn-primary mr-2">
              Skills
            </Link>
          </div>
          <div className="button">
            <Link to="/projects" className="btn btn-primary mr-2">
              Projects
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
