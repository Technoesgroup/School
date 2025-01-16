import React from "react";
import "../../Styles/Academics-CSS/AcademicsC3.css";
import Acitvity1 from  '../../image/IMG20241009115034.jpg';     
import Acitvity2 from  '../../image/304783286_3341234766202615_9176711875652758687_n.jpg';                     
import Acitvity3 from  '../../image/Rectangle 23814.png'; 
import Acitvity4 from  '../../image/IMG-20241029-WA0056.jpg'; 

const AcademicsC3 = () => {
  return (
    <div className="learning-pathways-container">
      <h2  id="Learning-section">
        <span className="learning-title">LEARNING</span>{" "}
        <span className="pathways-title">PATHWAYS</span>
      </h2>
      <p className="Academics-description">
        At MLZS, every student gets a personalized Learning Pathway, covering
        intellectual, physical, social, and emotional aspects through one of
        four designated pathways
      </p>
      <div className="Academics-content-container">
        <div className="Academics-text-section">
          <h3>Foundational Years (Nursery - Grade 2)</h3>
          <p>
            MLZS takes a comprehensive educational approach, addressing each
            child's distinct developmental needs. In the Foundational years
            setting, we emphasize four essential learning domains.
          </p>
          <ul className="learning-domains">
            <li>
              <span className="icon">😊</span> LEARNING FORMS OF EXPRESSION
            </li>
            <li>
              <span className="icon">🌎</span> EXPLORING AND INTERACTING WITH THE
              WORLD AROUND US
            </li>
            <li>
              <span className="icon">📖</span> UNDERSTANDING THE WORLD WE LIVE
              IN
            </li>
            <li>
              <span className="icon">🏃</span> PRACTICING A HEALTHY WAY OF LIVING
            </li>
          </ul>
        </div>
        <div className="Academic-image-section">
          <img src={Acitvity1} alt="Activity 1" />
          <img src={Acitvity2} alt="Activity 2" />
          <img src={Acitvity3} alt="Activity 3" />
          <img src={Acitvity4} alt="Activity 4" />
        </div>
      </div>
    </div>
  );
};

export default AcademicsC3;
