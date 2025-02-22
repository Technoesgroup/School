import React, { useState } from "react";
import "../../Styles/Careers-CSS/CareersCom_3.css";

const jobListings = [
  { id: 1, title: "PRT", description: "Graduation with at least 50% marks and B.Ed/D.El.Ed. Minimum work Experience of two years." },
  { id: 2, title: "TGT", description: "Graduation with at least 50% marks in the concerned subject & in aggregate and B.Ed from a recognized university. Minimum work Experience of three years." },
  { id: 3, title: "PGT", description: "Post Graduation in concerned subject with at least 50% marks in aggregate and B.Ed from a recognized university. Minimum work Experience of three years." },
  { id: 4, title: "Activity Facilitator", description: "Graduation/Equivalent qualification in the relevant field. Minimum work Experience of three years." },
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
  const [gender, setGender] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState(null);
  const [resume, setResume] = useState(null);

  const handlePositionChange = (e) => {
    setSelectedPosition(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setSelectedPosition(""); // Reset position selection when gender changes
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const encodeFileToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(",")[1]); // Extract base64 part
        reader.onerror = (error) => reject(error);
      });
    };
  
    try {
      const photoBase64 = photo ? await encodeFileToBase64(photo) : null;
      const resumeBase64 = resume ? await encodeFileToBase64(resume) : null;
  
      const formData = {
        fullName,
        phone,
        email,
        gender,
        dob,
        address,
        position: selectedPosition,
        resumeFile: resumeBase64,
        resumeMimeType: resume.type,
        resumeName: resume.name,
        photoFile: photoBase64,
        photoMimeType: photo.type,
        photoName: photo.name,
      };
  
      const response = await fetch("https://script.google.com/macros/s/AKfycbxYAwWax2WI8cbS_PWVDo-OA1_VrILw7rUexvtiovX9IK7hW8gJv-FQA9ZvOpLA54Sp/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (result.status === "success") {
        alert("Application submitted successfully!");
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting application. Please try again.");
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
          <input type="text" placeholder="Full Name*" className="CareersCom_3-input-field" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>

        <div className="CareersCom_3-form-group">
          <input type="text" placeholder="Phone*" className="CareersCom_3-input-field" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <input type="email" placeholder="Email*" className="CareersCom_3-input-field" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="CareersCom_3-form-group male-selector">
          <select className="CareersCom_3-input-field" required onChange={handleGenderChange}>
            <option value="">Select Gender*</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input type="date" placeholder="Date of Birth*" className="CareersCom_3-input-field date-of-birth" value={dob} onChange={(e) => setDob(e.target.value)} required />
        </div>

        <div className="CareersCom_3-form-group">
          <select className="CareersCom_3-input-field" required onChange={handlePositionChange} value={selectedPosition}>
            <option value="">Select Position*</option>
            {jobListings
              .filter((job) => gender !== "Male" || job.title !== "PRT") 
              .map((job) => (
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
          <input type="text" placeholder="Address*" className="CareersCom_3-input-field" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>

        <div className="CareersCom_3-form-group Careers-C3-pdf">
          <div>
            <input type="file" className="CareersCom_3-inputsss" onChange={handlePhotoChange} required />
            <p>Please Upload Your Photo*</p>
          </div>
          <div>
            <input type="file" className="CareersCom_3-inputsss" onChange={handleResumeChange} required />
            <p>Please Upload Your Resume*</p>
          </div>
        </div>

        <button type="submit" className="CareersCom_3-apply-button">APPLY</button>
      </form>
    </div>
  );
}



