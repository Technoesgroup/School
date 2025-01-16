import React from "react";
import "../../Styles/Gallery-CSS/GalleryC4.css";

const PhotoGallery = () => {
  const photoData = [
    { id: 1, image: "https://via.placeholder.com/300x200", title: "Annual Day" },
    { id: 2, image: "https://via.placeholder.com/300x200", title: "Annual Day" },
    { id: 3, image: "https://via.placeholder.com/300x200", title: "Annual Day" },
    { id: 4, image: "https://via.placeholder.com/300x200", title: "Annual Day" },
    { id: 5, image: "https://via.placeholder.com/300x200", title: "Annual Day" },
    { id: 6, image: "https://via.placeholder.com/300x200", title: "Annual Day" },
    { id: 7, image: "https://via.placeholder.com/300x200", title: "Annual Day" },
    { id: 8, image: "https://via.placeholder.com/300x200", title: "Annual Day" },
    { id: 9, image: "https://via.placeholder.com/300x200", title: "Annual Day" },
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

