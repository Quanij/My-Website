import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Skills() {
  return (
    <div>
      <div className="buttons">
        <div className="button">
          <Link to="/eduation" className="btn btn-primary mr-2">
            Education
          </Link>
        </div>
        <div className="button">
          <Link to="/experience" className="btn btn-primary mr-2">
            Experience
          </Link>
        </div>
        <div className="button">
          <Link to="/" className="btn btn-primary mr-2">
            Home
          </Link>
        </div>
        <div className="button">
          <Link to="/projects" className="btn btn-primary mr-2">
            Projects
          </Link>
        </div>
      </div>
      <div className="content">
        <h2>Skills</h2>
        <hr />
        <div className="item">
          <h3 className="title">Technical</h3>
          <ul>
            <li>Node.js</li>
            <li>MySQL</li>
            <li>GitHub</li>
            <li>JSON</li>
            <li>DevOps</li>
            <li>Git</li>
            <li>REST APIs</li>
            <li>Retool</li>
            <li>Pycharm</li>
            <li>Jira</li>
            <li>Confluence</li>
            <li>API</li>
            <li>Development</li>
            <li>Slack</li>
            <li>Microsoft Office</li>
            <li>Visual Studio Code</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>CircleCI</li>
            <li>Microsoft Azure</li>
            <li>Pipelines</li>
            <li>Python</li>
            <li>Java</li>
            <li>HTML</li>
            <li>Bootstrap & CSS</li>
            <li>Flask</li>
            <li>Remix</li>
            <li>Solidity</li>
            <li>AWS</li>
          </ul>
          <h3 className="title">Other/Social</h3>
          <ul>
            <li>Self Learning</li>
            <li>Problem Solving</li>
            <li>Agile Software Development</li>
            <li>Analytical</li>
            <li>Perspicacious</li>
            <li>Detail-Oriented</li>
            <li>Clear Communicator</li>
            <li>Collaborative</li>
            <li>Adaptable</li>
            <li>Innovative</li>
            <li>Organized</li>
            <li>Time Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
