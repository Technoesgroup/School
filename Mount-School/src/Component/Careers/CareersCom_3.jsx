import React, { useState } from "react";
import "../../Styles/Careers-CSS/CareersCom_3.css";

const jobListings = [
  { id: 1, title: "PRT", description: "Graduation with at least 50% marks and B.Ed/D.El.Ed . Minimum work Experience of two years." },
  { id: 2, title: "TGT",  description: "Graduation with at least 50% marks in the concerned subject & in aggregate and B.Ed from a recognized university. Minimum work Experience of three years." },
  { id: 3, title: "PGT",  description: "Post Graduation in concerned subject with at least 50% marks in aggregate and B.Ed from a recognized university. Minimum work Experience of three years." },
  { id: 4, title: "Activity Facilitator",  description: "Graduation/Equivalent qualification in the relevant field. Minimum work Experience of three years" },
];

const subjects = {
  PRT: ["English", "Maths", "EVS", "Computer", "Hindi (Only Females are allowed)"],
  TGT: ["English", "Maths", "Science", "Computer", "Hindi", "Social Sciences"],
  PGT: ["English", "Maths", "Physics", "Chemistry", "Biology", "Hindi", "Accountancy", "Political Science", "Geography", "History", "Psychology"],
  Activity: ["Activity Facilitator"],
};

export default function JobApplication() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState("");

  const handlePositionChange = (e) => {
    setSelectedPosition(e.target.value);
  };

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
            <span className="CareersCom_3-job-All-Data">
              <h3 className="CareersCom_3-job-title">{job.title}</h3>
              <p className="CareersCom_3-job-para">{job.description}</p>
            </span>
          </div>
        ))}
      </div>

      <h2 className="CareersCom_3-heading">Apply Here</h2>
      <form className="CareersCom_3-application-form">
        <div className="CareersCom_3-form-group">
          <input type="text" placeholder="Full Name*" className="CareersCom_3-input-field" required />
        </div>
        <div className="CareersCom_3-form-group">
          <input type="text" placeholder="Phone*" className="CareersCom_3-input-field" required />
          <input type="email" placeholder="Email*" className="CareersCom_3-input-field" required />
        </div>
        <div className="CareersCom_3-form-group">
          <select className="CareersCom_3-input-field" required onChange={handlePositionChange}>
            <option value="">Select Position*</option>
            {jobListings.map((job) => (
              <option key={job.id} value={job.title}>{job.title}</option>
            ))}
          </select>
          <select className="CareersCom_3-input-field" required>
            <option value="">Select Subject*</option>
            {selectedPosition && subjects[selectedPosition] && subjects[selectedPosition].map((subject, index) => (
              <option key={index} value={subject}>{subject}</option>
            ))}
          </select>
        </div>
        <div className="CareersCom_3-form-group">
          <input type="text" placeholder="Address*" className="CareersCom_3-input-field" required />
        </div>
        <div className="CareersCom_3-form-group Careers-C3-pdf">
          <div>
            <input type="file" className="CareersCom_3-inputsss" required />
            <p>Please Upload Your Photo*</p>
          </div>
          <div>
            <input type="file" className="CareersCom_3-inputsss" required />
            <p>Please Upload Your Resume*</p>
          </div>
        </div>
        <button type="submit" className="CareersCom_3-apply-button">APPLY</button>
      </form>
    </div>
  );
}


