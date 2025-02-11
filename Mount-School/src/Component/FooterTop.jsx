import React from "react";
import '../Styles/FooterTop.css';

const FooterTop = ({toggleForm}) => {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Don’t miss the crucial years to <br /> build your child’s spiritual foundation.</h1>
          <br />
          <button className="FooterTop-cta-button"  onClick={toggleForm}>ENQUIRE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;