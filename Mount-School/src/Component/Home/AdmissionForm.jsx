import React from "react";
import "../../Styles/Home-CSS/AdmissionForm.css";

const AdmissionForm = ({ closeForm }) => {
  return (
    <div className="Enquire-modal-container">
      <div className="Enquire-form-container">
        <div className="Enquire-form-header">
          <h2>ENQUIRE FOR ADMISSION</h2>
          <hr className="Enquire-header-line" />
         <span className="closebtn-squire"> <button className="Enquire-close-button" onClick={closeForm}>
            X
          </button></span>
        </div>
        <div className="Admissionform-Enquire-admission">
          <form className="Enquires-admission-formss">
            <input label="Parent’s First Name" type="text" placeholder="Parent’s First Name" required />
            <input label="Parent’s Last Name" type="text" placeholder="Parent’s Last Name" required/>
            <input label="Parent’s Phone Number" type="tel" placeholder="+91 Parent’s Phone Number" required/>
            <input label="Parent’s Email" type="email" placeholder="Parent’s Email" required/>
            <input label="Parent’s Location" type="text" placeholder="Parent’s Location" required/>
            <input label="Grade" type="text" placeholder="Grade" required/>
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


export default AdmissionForm;
