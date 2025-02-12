import React from "react";
import "../../Styles/Academics-CSS/AcademicsC9.css"; // Add your CSS file for styling
import image1 from '../../image/IMG20241009121829.jpg';
import image2 from '../../image/Rass1.png';
import image3 from '../../image/IMG20241009121322.jpg';
import image4 from '../../image/Rass2.png';


const RaasDandiya = () => {
  return (
    <div className="AcademicsC9-raas-dandiya-container">
      {/* Header Section */}
      <h1 className="AcademicsC9-event-title">Raas Dandiya, 2024</h1>

      {/* Description Section */}
      <div className="AcademicsC9-event-description">
        <p>
          The Raas Dandiya celebration as a true embodiment of the vibrant and festive spirit.
          The event commenced with a warm and gracious welcome extended by our talented students,
          setting the stage for a day filled with joy, energy, and cultural pride. The symbolic
          lighting of the lamp by our Director Sir marked the beginning of the festivities,
          establishing an atmosphere of positivity and reverence for the occasion.
        </p>
        <p>
          The highlights included spirited dance performances, heartfelt speeches, and the
          captivating Dandiya dances performed by our students. The rhythmic beats, synchronized
          steps, and colourful attire brought the spirit of Navratri to life, showcasing the
          beauty of this age-old tradition. The celebration was a true reflection of our school's
          commitment to preserving and honouring cultural heritage.
        </p>
      </div>

      {/* Image Gallery Section */}
      <div className="AcademicsC9-image-gallery">
        {/* Top Row */}
        <div className="AcademicsC9-top-row">
          <img src={image1} alt="Dandiya Dance Left" />
          <img src={image2} alt="Dandiya Dance Right" />
        </div>

        {/* Bottom Row */}
        <div className="AcademicsC9-bottom-row">
          <img src={image3} alt="Dandiya Dance Bottom Left" />
          <img src={image4} alt="Dandiya Dance Bottom Right" />
        </div>
      </div>
    </div>
  );
};

export default RaasDandiya;

