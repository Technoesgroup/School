import React, { useState } from "react";
import "../../Styles/Careers-CSS/CareersCom_3.css";

const jobListings = [
  { id: 1, title: "PRT", description: "Graduation with at least 50% marks and B.Ed/D.El.Ed. Minimum work experience of two years." },
  { id: 2, title: "TGT", description: "Graduation with at least 50% marks in the concerned subject & in aggregate and B.Ed from a recognized university. Minimum work experience of three years." },
  { id: 3, title: "PGT", description: "Post Graduation in the concerned subject with at least 50% marks in aggregate and B.Ed from a recognized university. Minimum work experience of three years." },
  { id: 4, title: "Activity Facilitator", description: "Graduation/Equivalent qualification in the relevant field. Minimum work experience of three years." },
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
  const [selectedSubject, setSelectedSubject] = useState("");
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
    setSelectedSubject(""); // Reset subject selection when position changes
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
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

  const encodeFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone.match(/^(\+91)?[6-9]\d{9}$/)) {
      alert("Invalid phone number! Enter a valid 10-digit number.");
      return;
    }

    if (!email.match(/^\S+@\S+\.\S+$/)) {
      alert("Invalid email! Please enter a valid email address.");
      return;
    }

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
        subject: selectedSubject,
        resumeFile: resumeBase64,
        resumeMimeType: resume?.type,
        resumeName: resume?.name,
        photoFile: photoBase64,
        photoMimeType: photo?.type,
        photoName: photo?.name,
      };

      const response = await fetch("http://localhost:4000/JobApplication", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      alert("Application submitted successfully!");

      // Reset form fields
      setFullName("");
      setPhone("");
      setEmail("");
      setDob("");
      setAddress("");
      setSelectedPosition("");
      setSelectedSubject("");
      setGender("");
      setPhoto(null);
      setResume(null);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application. Please try again!");
    }
  };

  const isFormValid = fullName && phone && email && dob && address && selectedPosition && selectedSubject && photo && resume;

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
        <input type="text" placeholder="Full Name*" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
         <div  className="input-section">
         <input type="text" placeholder="Phone*" value={phone} onChange={(e) => setPhone(e.target.value)} required />
         <input type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} required />
         </div>

<div  className="input-section">
<select  className="input-postions" required onChange={handleGenderChange}>
          <option value="">Select Gender*</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input type="date" placeholder="Date of Birth*" value={dob} onChange={(e) => setDob(e.target.value)} required />
</div>

       <div   className="input-section">
       <select  className="input-postions" required onChange={handlePositionChange} value={selectedPosition}>
          <option value="">Select Position*</option>
          {jobListings.map((job) => (
            <option key={job.id} value={job.title}>{job.title}</option>
          ))}
        </select>

        <select  className="input-postions" required onChange={handleSubjectChange} value={selectedSubject}>
          <option value="">Select Subject*</option>
          {(subjects[selectedPosition] || []).map((sub, index) => (
            <option key={index} value={sub}>{sub}</option>
          ))}
        </select>
       </div>

        <input type="text" placeholder="Address*" value={address} onChange={(e) => setAddress(e.target.value)} required />

     <div  className="pdf-section">
<div>
<input type="file" onChange={handlePhotoChange} required />
    <br></br>
        <p  className="photo-name">{photo ? photo.name : "Please Upload Your Photo*"}</p>
</div>

     <div>
     <input type="file" onChange={handleResumeChange} required />
        <br></br>
        <p  className="resume-name">{resume ? resume.name : "Please Upload Your Resume*"}</p>
     </div>
     </div>

        <button type="submit" disabled={!isFormValid}>APPLY</button>
      </form>
    </div>
  );
}




