import React, { useState } from "react";
import "../../Styles/Careers-CSS/CareersCom_3.css";

const jobListings = [
  { id: 1, title: "PRT", description: "Graduation with at least 50% marks and B.Ed/D.El.Ed . Minimum work Experience of two years." },
  { id: 2, title: "TGT", description: "Graduation with at least 50% marks in the concerned subject & in aggregate and B.Ed from a recognized university. Minimum work Experience of three years." },
  { id: 3, title: "PGT", description: "Post Graduation in concerned subject with at least 50% marks in aggregate and B.Ed from a recognized university. Minimum work Experience of three years." },
  { id: 4, title: "Activity Facilitator", description: "Graduation/Equivalent qualification in the relevant field. Minimum work Experience of three years" },
];

const subjects = {
  PRT: ["English", "Maths", "EVS", "Computer", "Hindi (Only Females are allowed)"],
  TGT: ["English", "Maths", "Science", "Computer", "Hindi", "Social Sciences"],
  PGT: ["English", "Maths", "Physics", "Chemistry", "Biology", "Hindi", "Accountancy", "Political Science", "Geography", "History", "Psychology"],
  Activity: ["Activity Facilitator"],
};

export default function JobApplication() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    gender: "",
    dob: "",
    position: "",
    subject: "",
    address: "",
  });

  const [selectedJob, setSelectedJob] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = "https://script.google.com/macros/s/AKfycbwth6Nh8GPMB_QOeAcgqutldi9lR3_yrdKKvHGaoa2yAFbcNkw6Jk0tCZRRAGv3d_Ch/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert("Application Submitted Successfully!");

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong! Try again.");
    }
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
      <form className="CareersCom_3-application-form" onSubmit={handleSubmit}>
        <div className="CareersCom_3-form-group">
          <input type="text" name="fullName" placeholder="Full Name*" className="CareersCom_3-input-field" required onChange={handleChange} />
        </div>

        <div className="CareersCom_3-form-group">
          <input type="text" name="phone" placeholder="Phone*" className="CareersCom_3-input-field" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email*" className="CareersCom_3-input-field" required onChange={handleChange} />
        </div>

        <div className="CareersCom_3-form-group male-selector">
          <select name="gender" className="CareersCom_3-input-field" required onChange={handleChange}>
            <option value="">Select Gender*</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input type="date" name="dob" placeholder="Date of Birth*" className="CareersCom_3-input-field date-of-birth" required onChange={handleChange} />
        </div>

        <div className="CareersCom_3-form-group">
          <select name="position" className="CareersCom_3-input-field" required onChange={handleChange}>
            <option value="">Select Position*</option>
            {jobListings
              .filter((job) => formData.gender !== "Male" || job.title !== "PRT")
              .map((job) => (
                <option key={job.id} value={job.title}>{job.title}</option>
              ))}
          </select>
          <select name="subject" className="CareersCom_3-input-field" required onChange={handleChange}>
            <option value="">Select Subject*</option>
            {formData.position && subjects[formData.position] && subjects[formData.position].map((subject, index) => (
              <option key={index} value={subject}>{subject}</option>
            ))}
          </select>
        </div>

        <div className="CareersCom_3-form-group">
          <input type="text" name="address" placeholder="Address*" className="CareersCom_3-input-field" required onChange={handleChange} />
        </div>

        <button type="submit" className="CareersCom_3-apply-button">APPLY</button>
      </form>
    </div>
  );
}



