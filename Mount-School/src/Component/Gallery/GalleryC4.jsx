import React, { useState } from "react";
import "../../Styles/Gallery-CSS/GalleryC4.css";
import { photoData } from "../../Component/Gallery/GalleryAssets";

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="photo-gallery-container">
      <h2>PHOTO GALLERY</h2>

      {/* Show categories with title image */}
      {selectedCategory === null ? (
        <div className="GalleryC4-photo-grid">
          {photoData.map((item) => (
            <div key={item.id} className="photo-card" onClick={() => setSelectedCategory(item)}>
              <img src={item.coverImage} alt={item.title} className="photo-image" />
              <p className="photo-title">{item.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <button  className="back-button" onClick={() => setSelectedCategory(null)}>🔙 Back</button>
          <div className="GalleryC4-photo-grid">
            {selectedCategory.images.map((img, index) => (
              <div key={index} className="photo-card">
                <img src={img} alt={`Image ${index + 1}`} className="photo-image" />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PhotoGallery;
