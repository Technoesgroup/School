import React from "react";
import '../Styles/FooterTop.css';

const FooterTop = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Don’t miss the crucial years to build your child’s spiritual foundation.</h1>
          <br />
          <button className="cta-button">Talk To Us →</button>
        </div>
        <div className="hero-navigation">
          <ul>
            <li>Enquire For Admissions</li>
            <li>How To Apply For Admission</li>
            <li>Application Form</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;