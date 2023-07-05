import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

function Experience() {
  return (
    <div>
      <div className="buttons">
        <div className="button">
          <Link to="/education" className="btn btn-primary mr-2">
            Education
          </Link>
        </div>
        <div className="button">
          <Link to="/" className="btn btn-primary mr-2">
            Home
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
        <h2>Experience</h2>
        <hr />
        <div className="item">
          <h3 className="title">Doma (Title & Real Estate Technology Company) </h3>
          <p className="subheading">Bridgeport, CT</p>
          <p className="subheading">Software Engineer Intern</p>
          <p className="subheading">06/2022 – 08/2022</p>
          <h5>I had a wonderful time at Doma, where I got a vast amount of “real world” experience. After this internship I believe that I am fully prepared </h5>
          <h5>for full time software engineering.</h5>

          <ul>
            <li>Designed and developed a new company tool which improved workflow by 80%.</li>
            <li>Managed over 20 Jira tickets within multiple Epics and ensured timely completion of assigned tasks.</li>
            <li>Utilized Circle CI Pipelines, Azure and GitHub for efficient tool development.</li>
            <li>Organized weekly meetings with colleagues and stake holders through Confluence, Git, Slack and Zoom.</li>
          </ul>

        </div>
        <div className="item">
          <h3 className="title">Google CSSI Extension Program</h3>
          <p className="subheading">Bridgeport, CT</p>
          <p className="subheading">Software Engineer Trainee</p>
          <p className="subheading">07/2019 – 08/2019</p>
          <h5>I had a wonderful time at Doma, where I got a vast amount of “real world” experience. After this internship I believe that I am fully prepared </h5>
          <h5>for full time software engineering.</h5>

          <ul>
            <li>Developed skills in JavaScript, Python, HTML, Bootstrap, and Google Cloud SDK.</li>
            <li>Applied these skills to create a dynamic website that generated outfits based on user inputs.</li>
            <li>Implemented Google Cloud SDK for seamless deployment and management of the website.</li>
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Experience;
