import React from "react";
import "../../Styles/Home-CSS/HomeC4.css"; // Add custom styles here
import SchoolImg from '../../image/Frame(4).jpg'

const AdmissionsBanner = ({toggleForm}) => {
  return (
    <div className="admissions-banner4">
      <div className="admission-content-4">
       <div  className="contents-of-admission">
       <h2>Admissions Now Open for</h2>
        <h1>2025-2026</h1>
        <p>
          Secure your child's future with our 
          innovative <br></br>curriculum and holistic
          development programs
        </p>
        <button className="Admission-enquire-btns"  onClick={toggleForm}>ENQUIRE NOW</button>
       </div>
      </div>
      <div className="image-sections-4">
        <img
          loading="lazy"
          src={SchoolImg} // Replace with your image path
          alt="Students in class"
        />
      </div>
    </div>
  );
};

export default AdmissionsBanner;

