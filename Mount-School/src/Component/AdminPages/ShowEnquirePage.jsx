import React, { useEffect, useState } from "react";
import '../AdminPages/ShowEnquirePage.css';

const AdmissionList = () => {
  const [admissions, setAdmissions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAdmissions = async () => {
      try {
        const response = await fetch("http://localhost:4000/admission");
        const data = await response.json();
        setAdmissions(data);
      } catch (error) {
        setError("Failed to fetch admissions data");
      }
    };

    fetchAdmissions();
  }, []);

  return (
    <div className="admission-list-container">
      <h2>Admission Requests</h2>
      {error && <p className="error">{error}</p>}
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
    </div>
  );
};

export default AdmissionList;
