import React, { useState } from "react";
import emailjs from "emailjs-com"; // Install using: npm install emailjs-com
import '../../Styles/Home-CSS/AdmissionForm.css'

const AdmissionForm = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    First_Name: "",
    Last_Name: "",
    Phone_Number: "",
    Email: "",
    Location: "",
    Grade: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => value.trim() === "")) {
      setError("All fields are required!");
      return;
    }

    const templateParams = {
      from_name: `${formData.First_Name} ${formData.Last_Name}`,
      Phone_Number: formData.Phone_Number, // Ensure same as EmailJS template
      Email: formData.Email, 
      Location: formData.Location,
      Grade: formData.Grade,
    };
    

    emailjs
      .send("service_itr9g8o", "template_ddo2ykb", templateParams, "ADdrIXlo1yY_vNDBI")
      .then((response) => {
        console.log("Email sent!", response);
        setSuccess("Email sent successfully!");
        setError("");
        setFormData({
          First_Name: "",
          Last_Name: "",
          Phone_Number: "",
          Email: "",
          Location: "",
          Grade: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setError("Failed to send email. Try again!");
      });
  };

  return (
    <div className="Enquire-modal-container">
      <div className="Enquire-form-container">
        <div className="Enquire-form-header">
          <h2>ENQUIRE FOR ADMISSION</h2>
          <span className="closebtn-squire">
            <button className="Enquire-close-button" onClick={closeForm}>X</button>
          </span>
        </div>

        <div className="Admissionform-Enquire-admission">
          <form className="Enquires-admission-formss" onSubmit={handleSubmit}>
            <input name="First_Name" type="text" placeholder="Parent’s First Name" value={formData.First_Name} onChange={handleChange} required />
            <input name="Last_Name" type="text" placeholder="Parent’s Last Name" value={formData.Last_Name} onChange={handleChange} required />
            <input name="Phone_Number" type="tel" placeholder="+91 Parent’s Phone Number" value={formData.Phone_Number} onChange={handleChange} required />
            <input name="Email" type="email" placeholder="Parent’s Email" value={formData.Email} onChange={handleChange} required />
            <input name="Location" type="text" placeholder="Parent’s Location" value={formData.Location} onChange={handleChange} required />
            <input name="Grade" type="text" placeholder="Grade" value={formData.Grade} onChange={handleChange} required />

            <span className="Admissionform-Enquire-agreements">
              <span><input type="checkbox" className="checkbox-Size" required /></span>
              <p>By submitting this form, I agree to receive notifications from the School in the form of SMS/E-mail/Call.</p>
            </span>

            {error && <p className="Admissionform-error">{error}</p>}
            {success && <p className="Admissionform-SuccessFull">{success}</p>}

            <button type="submit" className="Enquire-submit-button">Send Email</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;

