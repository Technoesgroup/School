import React from "react";
import "../../Styles/Academics-CSS/AcademicsC8.css"; // Add your CSS file for styling
import image1 from '../../image/20231031_103916.jpg';
import image2 from '../../image/20231031_103932.jpg';
import image3 from '../../image/Bhoot2.svg';
import image4 from '../../image/bhoot1.svg';
import image5 from '../../image/Bhoot3.svg';


const Hallowen = () => {
  return (
    <div className="AcademicsC8-Halloween-container">
      {/* Header Section */}
      <h1 className="AcademicsC8-event-title">Halloween Day, 31 Oct 2024</h1>

      {/* Description Section */}
      <div className="AcademicsC8-event-description">
        <p>
        Mount Litera Zee School Bihta turned into a spooky wonderland on Halloween Day 2024.
         The students arrived in creative costumes ranging from spooky ghosts to whimsical creatures,
          adding to the fun and excitement of the day. With themed games, decorations, and a costume
           parade, the event was a thrilling mix of fun, fright, and laughter, making it a memorable 
           celebration for all.
        </p>
      </div>

      {/* Image Gallery Section */}
      <div className="AcademicsC8-image-gallery">
        {/* Top Row */}
        <div className="AcademicsC8-top-row">
          <img src={image1} alt="Halloween Left" />
          <img src={image2} alt="Halloween Right" />
        </div>

        {/* Bottom Row */}
        <div className="AcademicsC8-bottom-row">
          <img src={image3} alt=" Halloween Bottom Left" />
          <img src={image4} alt=" Halloween Bottom Right" />
          <img  className="none-img" src={image5} alt=" Halloween Bottom Right" />
        </div>
      </div>
    </div>
  );
};

export default Hallowen;