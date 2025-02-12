import React from "react";
import "../../Styles/Academics-CSS/AcademicsC13.css"; // Add your CSS file for styling
import image1 from '../../image/Takonda.jpg';
import image2 from '../../image/tokanda3.svg';
import image4 from '../../image/tokanda4.svg';


const SGFI_Tournament = () => {
  return (
    <div className="AcademicsC13-SGFI_Tournament-container">
      {/* Header Section */}
      <h1 className="AcademicsC13-event-title">The SGFI Tournament Triumphs, 2024</h1>

      {/* Description Section */}
      <div className="AcademicsC13-event-description">
        <p>
        The erudite scholars of Mount Litera Zee School, Bihta, spell of honor and valour and indefatigable spirit, partook in the venerable SGFI (School Games Federation of India) tournament held at the esteemed Patliputra Sports Complex, Patna. These paragons of youthful excellence, displaying prodigious skill and resolute determination, emerged victorious, bringing home a bounty of laurels that now grace the name of our illustrious institution. Their triumphs stand as a shining testament to the school’s unwavering commitment to fostering talent and nurturing a spirit of excellence.
        </p>
        <p>
        In a solemn yet joyous ceremony held at the school, these remarkable champions were duly felicitated for their extraordinary achievements. Their victories, echoing the valor of ancient heroes, remind us that sports are far more than mere recreation; they are arenas where virtues such as discipline, perseverance, and teamwork are tested, refined, and exalted. Through such contests, the minds and bodies of our youth are honed, forging individuals of indomitable character and unwavering will.
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