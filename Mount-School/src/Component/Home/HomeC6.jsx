import React from "react";
import "../../Styles/Home-CSS/HomeC6.css"; // Add custom styles here
import leaderImg from '../../image/Rectangle 23856.png';
import quotsImg from '../../image/left-quote 1 (Traced).png';


const LeaderMessage = () => {
  return (
    <div className="leader-message">
      <div className="left-section_C6">
        <div className="contentss">
          <p className="small-text">MESSAGE FROM <br /> OUR LEADER</p>
          <div className="quote-icon">
             <img src={quotsImg} alt="" />
          </div>
          <h2>MR. NAVIN KUMAR</h2>
          <p className="position">Chairman</p>
        </div>
      </div>
      <div className="leader-Image">
        <img
          src={leaderImg}
          alt="Chairman"
          className="leader-image"
        />
      </div>
      <div className="right-section">
        <p>
          “At MLZS, we believe education is the key to unlocking potential,
          fostering values, and shaping future leaders. Together, let us
          create a foundation for success, guided by knowledge, integrity,
          and excellence.”
        </p>
      </div>
    </div>
  );
};

export default LeaderMessage;
