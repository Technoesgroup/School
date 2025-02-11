import React, { useState } from "react";
import "../../Styles/Careers-CSS/CareersCom_3.css";

const jobListings = [
  { id: 1, title: "TGT Computer Science", time: "16 Jan 2024", description:"We are hiring a Computer Science Teacher to guide students in programming, networking, and technology fundamentals.", },
  { id: 2, title: "PRT All Subjects", time: "16 Jan 2024",description:"We are hiring a Computer Science Teacher to guide students in programming, networking, and technology fundamentals." },
  { id: 3, title: "PRT English", time: "16 Jan 2024",description:"We are hiring a Computer Science Teacher to guide students in programming, networking, and technology fundamentals." },
  { id: 4, title: "TGT Science", time: "12 Feb 2024" ,description:"We are hiring a Computer Science Teacher to guide students in programming, networking, and technology fundamentals." },
  { id: 5, title: "PRT Hindi", time: "12 Feb 2024" ,description:"We are hiring a Computer Science Teacher to guide students in programming, networking, and technology fundamentals." }
];

export default function JobApplication() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="CareersCom_3-container">
      <h2 className="CareersCom_3-heading">Work With Us</h2>
      <div className="CareersCom_3-job-list">
        {jobListings.map((job) => (
          <div
            key={job.id}
            className={`CareersCom_3-job-card ${selectedJob === job.id ? "selected" : ""}`}
            onClick={() => setSelectedJob(job.id)}
          >
          <span  className="CareersCom_3-job-All-Data">
          <h3 className="CareersCom_3-job-title">{job.title}</h3>
          <p className="CareersCom_3-job-para">{job.description}</p>
          <span className="CareersCom_3-subjects-p">
          <p>B.Ed./MCA/B.Tech</p>
           <p>Coding</p>
           <p>Python</p>
          </span>
          </span>
          </div>
        ))}
      </div>

      <h2 className="CareersCom_3-heading">Apply Here</h2>
      <form className="CareersCom_3-application-form">
        <div className="CareersCom_3-form-group">
          <input type="text" placeholder="Full Name" className="CareersCom_3-input-field" />
          <input type="email" placeholder="Email" className="CareersCom_3-input-field" />
        </div>
        <div className="CareersCom_3-form-group">
          <input type="text" placeholder="Phone" className="CareersCom_3-input-field" />
          <select className="CareersCom_3-input-field-Position">
          <option>PRT. TGT.</option>
          <option>PGT. Art  & Craft</option>  
          <option>Dance</option>  
          <option>Music</option>                   
          <option>Mother Teacher(only Females)</option>
          <option>Receptionist </option>
          <option>Accountant</option>
          <option>Office Staff</option>
          <option>Physical Health Education</option>
        </select>
        </div>
        <select className="CareersCom_3-input-field">
          <option>Subject</option>
          <option>Math</option>
          <option>Science</option>
        </select>
        <p>Please Upload Your Resume</p>
        <input type="file" className="CareersCom_3-input-field Chosse-File-Input"/>
        <button className="CareersCom_3-apply-button">Apply</button>
      </form>
    </div>
  );
}