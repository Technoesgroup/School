import React from "react";
import "../../Styles/Academics-CSS/AcademicsC12.css"; // Add your CSS file for styling
import image1 from '../../image/IMG-20241029-WA0056.jpg';
import image2 from '../../image/IMG-20241029-WA0050.jpg';
import image3 from '../../image/diwali celebration.jpg';
import image4 from '../../image/IMG-20241029-WA0060.jpg';


const Diwali = () => {
  return (
    <div className="AcademicsC12-Diwali-container">
      {/* Header Section */}
      <h1 className="AcademicsC12-event-title">Diwali Celebration, 2024</h1>

      {/* Description Section */}
      <div className="AcademicsC12-event-description">
        <p>
        On the occasion of Diwali, the students of Mount Litera Zee School, Bihta, embraced the spirit of the Festival of Lights with much fervor and creativity. Each grade participated with great enthusiasm, engaging in a variety of festive activities. The students crafted vibrant diyas, rangolis, eco-friendly torans, candle holders, origami, and festive collages, infusing the school with the colours and lights of the season. The creation of tissue paper lanterns, thumbprint diya cards, clay diyas, 3D paper diyas, handmade lanterns, and deepawali wall murals adorned the school, making it a truly festive sight.
        </p>
        <p>
        Students shared insightful presentations on the profound significance of Diwali, reflecting on the timeless values of peace, joy, and enlightenment that the festival brings. The day was filled with creativity, learning, and a warm festive spirit, marking the true essence of this auspicious occasion.
        </p>
      </div>

      {/* Image Gallery Section */}
      <div className="AcademicsC12-image-gallery">
        {/* Top Row */}
        <div className="AcademicsC12-top-row">
          <img src={image1} alt="Diwali Dance Left" />
          <img src={image2} alt="Diwali Dance Right" />
        </div>

        {/* Bottom Row */}
        <div className="AcademicsC12-bottom-row">
          <img src={image3} alt="Diwali Dance Bottom Left" />
          <img src={image4} alt="Diwali Dance Bottom Right" />
        </div>
      </div>
    </div>
  );
};

export default Diwali;