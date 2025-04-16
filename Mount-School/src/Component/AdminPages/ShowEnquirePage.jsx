import React, { useEffect, useState } from "react";
import '../AdminPages/ShowEnquirePage.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const AdmissionList = () => {
  const [admissions, setAdmissions] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // ⏳ loading state

  useEffect(() => {
    const fetchAdmissions = async () => {
      try {
        const response = await fetch("https://school-1lst.onrender.com/admission");
        const data = await response.json();
        setAdmissions(data);
      } catch (error) {
        setError("Failed to fetch admissions data");
      } finally {
        setLoading(false); // ✅ loading done
      }
    };

    fetchAdmissions();
  }, []);

  return (
    <div className="admission-list-container">
      <h2>Admission Requests</h2>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <CircularProgress />
          <p>Loading admission data...</p>
        </Box>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Location</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {admissions.length > 0 ? (
              admissions.map((admission, index) => (
                <tr key={index}>
                  <td>{admission.First_Name}</td>
                  <td>{admission.Last_Name}</td>
                  <td>{admission.Phone_Number}</td>
                  <td>{admission.Email}</td>
                  <td>{admission.Location}</td>
                  <td>{admission.Grade}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdmissionList;
