import React from "react";
import "../../Styles/Home-CSS/HomeC4.css"; // Add custom styles here
import SchoolImg from '../../image/Frame(4).jpg'

const AdmissionsBanner = () => {
  return (
    <div className="admissions-banner4">
      <div className="admission-content-4">
        <h2>Admissions Now Open for</h2>
        <h1>2025-2026</h1>
        <p>
          Secure your child's future with our 
          innovative <br></br>curriculum and holistic
          development programs
        </p>
        <button className="enquire-btns">ENQUIRE NOW</button>
      </div>
      <div className="image-sections-4">
        <img
          src={SchoolImg} // Replace with your image path
          alt="Students in class"
        />
      </div>
    </div>
  );
};

export default AdmissionsBanner;
