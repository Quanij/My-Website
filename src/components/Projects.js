import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div>
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
          <Link to="/" className="btn btn-primary mr-2">
            Home
          </Link>
        </div>
      </div>
      <div className="content">
        <h2>Projects</h2>
        <hr />
        <div className="item">
          <h3 className="title">Go Pump - Smart Tire Pump</h3>
          <h5>Technology used: Flask, Python, JavaScript, HTML, CSS, Git, SQL</h5>
          <ul>
            <li>Designed and developed an innovative tire pump system using an Arduino Uno with a team of 4.</li>
            <li>Implemented advanced features including inflation to the desired PSI and leak detection.</li>
            <li>Created a database to store tire pressure data, allowing for dynamic adjustment of inflation</li>
            settings based on seasonal changes
            <li>Led the development of a user-friendly website that provides remote access for monitoring</li>
            and management of the system.
          </ul>
        </div>
        <div className="item">
          <h3 className="title">Xclusive - Outfit Generator</h3>
          <h5>Technology used: Google GCP, Python, JavaScript, Bootstrap, HTML, CSS, Git, SQL</h5>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className="item">
          <h3 className="title">Black Jack Simulation</h3>
          <h5>Technology used: C++</h5>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
