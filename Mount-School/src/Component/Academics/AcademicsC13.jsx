import React from "react";
import "../../Styles/Academics-CSS/AcademicsC13.css"; // Add your CSS file for styling
import image1 from '../../image/Takonda.jpg';
import image2 from '../../image/tokanda3.svg';
import image4 from '../../image/tokanda4.svg';


const SGFI_Tournament = () => {
  return (
    <div className="AcademicsC13-SGFI_Tournament-container">
      {/* Header Section */}
      <h1 className="AcademicsC13-event-title">The SGFI Tournament Triumphs, 09 Oct 2024</h1>

      {/* Description Section */}
      <div className="AcademicsC13-event-description">
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
      <div className="AcademicsC13-image-gallery">
        {/* Top Row */}
        <div className="AcademicsC13-top-row">
          <img src={image1} alt=" SGFI_Tournament Left" />
          <img src={image2} alt=" SGFI_Tournament Right" />
        </div>

        {/* Bottom Row */}
        <div className="AcademicsC13-bottom-row">
          {/* <img src={image3} alt=" SGFI_Tournament Bottom Left" /> */}
          <img src={image4} alt=" SGFI_Tournament Bottom Right" />
        </div>
      </div>
    </div>
  );
};

export default SGFI_Tournament;