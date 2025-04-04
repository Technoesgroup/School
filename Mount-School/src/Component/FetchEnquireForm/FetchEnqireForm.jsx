import React, { useState, useEffect } from "react";

const EnquiryList = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/enquiries") // API call
      .then((response) => response.json())
      .then((data) => setEnquiries(data))
      .catch((err) => setError("Failed to fetch enquiries"));
  }, []);

  return (
    <div>
      <h2>Enquiry Form Submissions</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Location</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enquiry) => (
            <tr key={enquiry._id}>
              <td>{enquiry.First_Name} {enquiry.Last_Name}</td>
              <td>{enquiry.Phone_Number}</td>
              <td>{enquiry.Email}</td>
              <td>{enquiry.Location}</td>
              <td>{enquiry.Grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnquiryList;
