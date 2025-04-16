import React, { useEffect, useState } from "react";
import "../AdminPages/ShowCareerPage.css"; // Ensure you have a CSS file for styling

const JobApplicationsList = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/JobApplication`);
        const data = await response.json();
        setApplications(data);
      } catch (error) {
        setError("Failed to fetch job applications data");
      }
    };
  
    fetchApplications();
  }, []);
  

  return (
    <div className="job-applications-container">
      <h2>Job Applications</h2>
      {error && <p className="error">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Address</th>
            <th>Position</th>
            <th>Subject</th>
            <th>Resume</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {applications.length > 0 ? (
            applications.map((app, index) => (
              <tr key={index}>
                <td>{app.fullName}</td>
                <td>{app.phone}</td>
                <td>{app.email}</td>
                <td>{app.gender}</td>
                <td>{app.dob}</td>
                <td>{app.address}</td>
                <td>{app.position}</td>
                <td>{app.subject}</td>
                <td>
                  <a href={`data:${app.resumeMimeType};base64,${app.resumeFile}`} download={app.resumeName}>
                    Download Resume
                  </a>
                </td>
                <td>
                  <img src={`data:${app.photoMimeType};base64,${app.photoFile}`} alt="Applicant" className="applicant-photo"/>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10">No applications available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default JobApplicationsList;
