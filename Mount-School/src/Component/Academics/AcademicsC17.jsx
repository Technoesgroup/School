import React from "react";
import "../../Styles/Academics-CSS/AcademicsC17.css"; // Add your CSS file for styling
import image1 from '../../image/WhatsApp Image 2025-02-12 at 16.58.23_abae6765.jpg';
import image2 from '../../image/1111.png';
import image3 from '../../image/333.png';
import image4 from '../../image/22222.png';


const Janmashtami = () => {
  return (
    <div className="AcademicsC17-Janmashtami-container">
      {/* Header Section */}
      <h1 className="AcademicsC17-event-title">Special Assembly on Janmashtami</h1>

      {/* Description Section */}
      <div className="AcademicsC17-event-description">
        <p>
        Mount Litera Zee School, Bihta, celebrated the divine festival of Janmashtami with immense joy and enthusiasm. The little stars from the pre-primary section came together to commemorate this auspicious occasion in the most delightful way.
        </p>
        <p>
        Dressed as adorable Radhas and Krishnas, the children brought the enchanting story of Lord Krishna to life. Their cheerful singing and vibrant performances filled the assembly with devotion and festive spirit, creating an atmosphere of pure joy.
        </p>
        <p>
        It was a beautiful celebration of culture and tradition, reminding us of the importance of passing down such precious values to our young ones.
        </p>
       
      </div>

      {/* Image Gallery Section */}
      <div className="AcademicsC17-image-gallery">
        {/* Top Row */}
        <div className="AcademicsC17-top-row">
          <img   loading="lazy" src={image1} alt="Teacher  Left" />
          <img   loading="lazy" src={image2} alt="Teacher  Right" />
        </div>

        {/* Bottom Row */}
        <div className="AcademicsC17-bottom-row">
          <img   loading="lazy" src={image3} alt="Teacher  Bottom Left" />
          <img   loading="lazy" src={image4} alt="Teacher  Bottom Right" />
        </div>
      </div>
    </div>
  );
};

export default Janmashtami;