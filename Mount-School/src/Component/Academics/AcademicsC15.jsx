import React from "react";
import "../../Styles/Academics-CSS/AcademicsC15.css"; // Add your CSS file for styling
import image1 from '../../image/11.svg';
import image2 from '../../image/22.svg';
import image3 from '../../image/33.svg';
import image4 from '../../image/44.svg';


const Teacher = () => {
  return (
    <div className="AcademicsC15-Teacher-container">
      {/* Header Section */}
      <h1 className="AcademicsC15-event-title">Teacher’s Day Celebration, 2024</h1>

      {/* Description Section */}
      <div className="AcademicsC15-event-description">
        <p>
        The students celebrated Teachers’ Day 2024 with heartfelt gratitude and respect for their teachers. The day was filled with performances, speeches, and activities where students expressed their appreciation for the tireless dedication and hard work of their educators. The event served as a reminder of the invaluable role teachers play in shaping young minds.
        </p>
       
      </div>

      {/* Image Gallery Section */}
      <div className="AcademicsC15-image-gallery">
        {/* Top Row */}
        <div className="AcademicsC15-top-row">
          <img  loading="lazy" src={image1} alt="Teacher  Left" />
          <img  loading="lazy" src={image2} alt="Teacher  Right" />
        </div>

        {/* Bottom Row */}
        <div className="AcademicsC15-bottom-row">
          <img   loading="lazy"src={image3} alt="Teacher  Bottom Left" />
          <img   loading="lazy"src={image4} alt="Teacher  Bottom Right" />
        </div>
      </div>
    </div>
  );
};

export default Teacher;