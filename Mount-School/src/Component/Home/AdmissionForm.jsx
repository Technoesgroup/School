import React from "react";
import "../../Styles/Home-CSS/AdmissionForm.css";

const AdmissionForm = ({ closeForm }) => {
  return (
    <div className="Enquire-modal-container">
      <div className="Enquire-form-container">
        <div className="Enquire-form-header">
          <h2>ENQUIRE FOR ADMISSION</h2>
          <hr className="Enquire-header-line" />
          <button className="Enquire-close-button" onClick={closeForm}>
            X
          </button>
        </div>
        <div className="Enquire-admission">
          <form className="Enquire-admission-form">
            <InputField label="Parent’s First Name" type="text" placeholder="Parent’s First Name" />
            <InputField label="Parent’s Last Name" type="text" placeholder="Parent’s Last Name" />
            <InputField label="Parent’s Phone Number" type="tel" placeholder="+91 Parent’s Phone Number" />
            <InputField label="Parent’s Email" type="email" placeholder="Parent’s Email" />
            <InputField label="Parent’s Location" type="text" placeholder="Parent’s Location" />
            <InputField label="Grade" type="text" placeholder="Grade" />
            <p className="Enquire-form-agreement">
              By submitting this form, I agree to receive notifications from the School in the form of SMS/E-mail/Call.
            </p>
            <button type="submit" className="Enquire-submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, type, placeholder }) => {
  return (
    <div className="Enquire-input-field">
      <input type={type} placeholder={placeholder} required />
    </div>
  );
};

export default AdmissionForm;
