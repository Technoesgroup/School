import React from "react";
import "../../Styles/Academics-CSS/AcademicsC16.css"; // Add your CSS file for styling
import image1 from '../../image/j.svg';
import image2 from '../../image/q.jpg';
import image4 from '../../image/l.png';


const SGFI_Tournament = () => {
  return (
    <div className="AcademicsC16-Hindi_Diwas-container">
      {/* Header Section */}
      <h1 className="AcademicsC16-event-title">Hindi Diwas 2024</h1>

      {/* Description Section */}
      <div className="AcademicsC16-event-description">
        <p>
        At Mount Litera Zee School, Bihta, the occasion of Hindi Diwas 2024 was celebrated with great reverence and respect. This day offers us a golden opportunity to express our admiration and honour for our mother tongue, Hindi. Hindi is not only the identity of our nation, but it also preserves the richness of our culture, literature, and the many facets of our lives. It is a language that enables us to express our emotions and serves as a powerful medium that unites us, fostering harmony and understanding.
        </p>
        <p>
        On this special occasion of Hindi Diwas, we reaffirm our commitment to promoting and nurturing our rich and glorious language in every aspect of life. Hindi, which continues to bind our society together in its purest form, remains as relevant today as ever before. It connects us with our history, culture, and values, and plays an essential role in our personal and societal development.
        </p>
      </div>

      {/* Image Gallery Section */}
      <div className="AcademicsC16-image-gallery">
        {/* Top Row */}
        <div className="AcademicsC16-top-row">
          <img src={image1} alt=" Hindi_DiwasLeft" />
        </div>

        {/* Bottom Row */}
        <div className="AcademicsC16-bottom-row">
          <img src={image2} alt=" Hindi_Diwas Right" />
          <img src={image4} alt=" Hindi_Diwas Bottom Right" />
        </div>
      </div>
    </div>
  );
};

export default SGFI_Tournament;