import React from "react";
import "../../Styles/Gallery-CSS/GalleryC4.css";
import Farewell from '../../image/332651516_1267840104082038_69494475655152421_n.jpg';
import Hallo from '../../image/20231031_103847.jpg';
import Rass from '../../image/IMG20241009115034.jpg';
import SGFI from '../../image/Takonda2.png';
import Annual from '../../image/1B7A5369.jpg';
import Diwali from '../../image/IMG-20241029-WA0060.jpg';
import Janmastmi from '../../image/400493600_805418674930215_5780913748664188151_n.jpg';
import Hindi from '../../image/IMG_20240726_195817.jpg';
import Summer_Camp from '../../image/SummerCamp.jpg';
import Vijay_Diwas from '../../image/IMG-20241029-WA0060.jpg';
import Investure from '../../image/IMG-20240522-WA0064.jpg';
import GreenDay from '../../image/GreenDay.jpg';

const PhotoGallery = () => {

  const photoData = [
    { id: 1, image: Farewell, title: "Farewell 2024" },
    { id: 2, image: Hallo, title: "Halloween 2024" },
    { id: 3, image: Rass, title: "Rass Dandiya" },
    { id: 4, image: Annual, title: "Annual Day" },
    { id: 5, image: Diwali, title: "Diwali Celebration" },
    { id: 6, image: Janmastmi, title: "Hindi Diwas" },
    { id: 7, image: Hindi, title: "Vijay Diwas" },
    { id: 8, image: Summer_Camp, title: "Summer Camp" },
    { id: 9, image: Vijay_Diwas, title: "Diwali Celebration" },
    { id: 10, image: Investure, title: "Investiture Ceremony" },
    { id: 11, image: GreenDay, title: "Green Day" },
    { id: 12, image: SGFI, title: "SGFI Tournament" },
  ];

  return (
    <div className="photo-gallery-container">
      {/* Heading */}
      <h2>PHOTO GALLERY</h2>

      {/* Image Grid */}
      <div className="photo-grid">
        {photoData.map((item) => (
          <div key={item.id} className="photo-card">
            <img src={item.image} alt={item.title} className="photo-image" />
            <p className="photo-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;

