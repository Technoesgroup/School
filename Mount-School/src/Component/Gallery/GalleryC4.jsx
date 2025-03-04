import React, { useState, Suspense } from "react";
import "../../Styles/Gallery-CSS/GalleryC4.css";
import { photoData } from "../../Component/Gallery/GalleryAssets";

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="photo-gallery-container">
      <h2>PHOTO GALLERY</h2>

      {selectedCategory === null ? (
        <div className="GalleryC4-photo-grid">
          {photoData.map((item) => (
            <div key={item.id} className="photo-card" onClick={() => setSelectedCategory(item)}>
              <Suspense fallback={<div>Loading Image...</div>}>
                <img src={item.coverImage} alt={item.title} className="photo-image" />
              </Suspense>
              <p className="photo-title">{item.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <button className="back-button" onClick={() => setSelectedCategory(null)}>Back</button>
          <div className="GalleryC4-photo-Column">
  {selectedCategory.images.map((imageSrc, index) => (
    <div key={index} className="photo-cards">
      <Suspense fallback={<div>Loading Image...</div>}>
        <img src={imageSrc} alt={`Image ${index + 1}`} className="photo-image" />
      </Suspense>
    </div>
  ))}
</div>

        </>
      )}
    </div>
  );
};

export default PhotoGallery;

