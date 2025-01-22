import React from "react";
import "../../Styles/Home-CSS/HomeC9.css";
import C1 from '../../image/1B7A5369.jpg';
import C2 from '../../image/1B7A4922.jpg';
import C3 from '../../image/Rectangle 23816.png';
import C4 from '../../image/1B7A5554.jpg';
import C5 from '../../image/393756555_791390669666349_153801016084109592_n.jpg';
import C6 from '../../image/401469301_805388458266570_1033234963827125330_n.jpg';
import C7 from '../../image/Takonda2.png';
import C8 from '../../image/1B7A4945.jpg';
import C9 from '../../image/s5.jpg';
import C10 from '../../image/IMG-20241029-WA0056.jpg';
import C11 from '../../image/1B7A5333.jpg';

const HomeGallery = () => {
  const photoData = [
    { id: 1, image: C1, title: "Annual Day" },
    { id: 2, image: C2, title: "Annual Day" },
    { id: 3, image: C3, title: "Annual Day" },
    { id: 4, image: C4, title: "Annual Day" },
    { id: 5, image: C5, title: "Annual Day" },
    { id: 6, image: C6, title: "Annual Day" },
    { id: 7, image: C7, title: "Annual Day" },
    { id: 8, image: C8, title: "Annual Day" },
    { id: 9, image: C9, title: "Annual Day" },
    { id: 10, image: C10, title: "Annual Day" },
    { id: 11, image: C11, title: "Annual Day" },
  ];

  return (
    <div className="Home-photo-gallery-container">
      {/* Heading */}
      <h2>GALLERY</h2>

      {/* Image Grid */}
      <div className="Home-photo-grid">
        {/* Wrapper for all images */}
        <div className="Home-photo-images">
          {photoData.map((item) => (
            <div key={item.id} className="Home-photo-card">
              <img src={item.image} alt={item.title} className="Home-photo-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
