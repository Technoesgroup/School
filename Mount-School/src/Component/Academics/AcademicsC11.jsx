import React from "react";
import "../../Styles/Academics-CSS/AcademicsC11.css"; // Add your CSS file for styling
import image1 from '../../image/WhatsApp Image 2025-01-28 at 16.24.34_a1858b26.jpg';
import image2 from '../../image/Image.png';
import image3 from '../../image/20240210_142537.jpg';
import image4 from '../../image/WhatsApp Image 2024-02-12 at 8.35.42 AM.jpeg.jpg';
import image5 from '../../image/20240210_133204.jpg';


const AnnualDay = () => {
  return (
    <div className="AcademicsC11-AnnualDay-container">
      {/* Header Section */}
      <h1 className="AcademicsC11-event-title">Annual Sports Day, 09 Feb 2024</h1>

      {/* Description Section */}
      <div className="AcademicsC11-event-description">
        <p>
        The Annual Sports Day 2024 as a grand display of athleticism and team spirit.
         Students participated in a range of competitive events, from track races to field
          games, showcasing their physical endurance and determination. The event was filled 
          with energy and enthusiasm, with students cheering each other on, making it a day to 
          remember for both participants and spectators alike.
        </p>
      </div>

      {/* Image Gallery Section */}
      <div className="AcademicsC11-image-gallery">
        {/* Top Row */}
        <div className="AcademicsC11-top-row">
          <img src={image1} alt="Annual Sports Day  Left" />
          <img src={image2} alt="Annual Sports Day  Right" />
        </div>

        {/* Bottom Row */}
        <div className="AcademicsC11-bottom-row">
          <img src={image3} alt="Annual Sports Day Bottom Left" />
          <img src={image4} alt="Annual Sports Day Bottom Right" />
          <img className="none-img" src={image5} alt="Annual Sports Day Bottom Right" />
        </div>
      </div>
    </div>
  );
};

export default AnnualDay;