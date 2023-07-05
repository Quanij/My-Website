import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Education() {
  return (
    <div>
      <div className="buttons">
        <div className="button">
          <Link to="/" className="btn btn-primary mr-2">
            Home
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
      <div className="content">
        <h2>Education</h2>
        <hr />
        <div className="item">
          <h3 className="title">University of Bridgeport</h3>
          <p className="subheading">Bridgeport, CT</p>
          <p className="subheading">GPA: 3.6 (Cum Laude Honors)</p>
          <p className="subheading">09/2019 – 05/2023</p>
          <p>Bachelor of Science in Computer Science and Mathematics</p>
          <ul>
            <li>Awardee of Academic Scholarship</li>
          </ul>
          <h4>Related Coursework:</h4>
          <ul>
            <li>Logic and Axiomatics</li>
            <li>Digital Design</li>
            <li>Adv Data Struct & File Struct</li>
            <li>Database Design</li>
            <li>OOP with Design Patterns</li>
            <li>Windows Programming</li>
            <li>Operating Systems</li>
            <li>Python for Data Science</li>
            <li>Cloud Computing</li>
            <li>Web-Based Appl Dev</li>
            <li>Software Engineering</li>
            <li>Blockchain & Cryptocurrency Technology</li>
            <li>Data Mining</li>
            <li>Data and Computer Communication</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education;
