import React, { useEffect, useState } from "react";
import "../AdminPages/ShowCareerPage.css";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const JobApplicationsList = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch("https://school-1lst.onrender.com/JobApplication");
        const data = await response.json();
        setApplications(data);
      } catch (error) {
        setError("Failed to fetch job applications data");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="job-applications-container">
      <h2>Job Applications</h2>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <CircularProgress />
          <p>Loading Career data...</p>
        </Box>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (

        <div className="overflow-wrapper">
        <table  className="overflow-table">
          <thead>
            <tr>
              <th>Submitted At</th> {/* 👈 New Column */}
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
                  <td>{new Date(app.createdAt).toLocaleString()}</td> {/* 👈 Display time */}
                  <td>{app.fullName}</td>
                  <td>{app.phone}</td>
                  <td>{app.email}</td>
                  <td>{app.gender}</td>
                  <td>{app.dob}</td>
                  <td>{app.address}</td>
                  <td>{app.position}</td>
                  <td>{app.subject}</td>
                  <td>
                    <a
                      href={`data:${app.resumeMimeType};base64,${app.resumeFile}`}
                      download={app.resumeName}
                    >
                      Download <br />Resume
                      <DownloadForOfflineIcon />
                    </a>
                  </td>
                  <td>
                    <img
                      src={`data:${app.photoMimeType};base64,${app.photoFile}`}
                      alt="Applicant"
                      className="applicant-photo"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11">No applications available</td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
};

export default JobApplicationsList;

