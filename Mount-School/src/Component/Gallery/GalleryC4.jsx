import React, { useState, useEffect, Suspense } from "react";
import "../../Styles/Gallery-CSS/GalleryC4.css";
import axios from "axios";

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/getallgallery");
        setGalleryData(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gallery data", error);
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) return <div>Loading Gallery...</div>;

  return (
    <div className="photo-gallery-container">
      <h2>PHOTO GALLERY</h2>

      {selectedCategory === null ? (
        <div className="GalleryC4-photo-grid">
          {galleryData.map((item) => (
            <div key={item._id} className="photo-card" onClick={() => setSelectedCategory(item)}>
              <Suspense fallback={<div>Loading Image...</div>}>
                <img
                  src={`http://localhost:4000/uploads/${item.coverImage}`}
                  alt={item.title}
                  className="photo-image"
                />
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
                  <img
                    loading="lazy"
                    src={`http://localhost:4000/uploads/${imageSrc}`}
                    alt={`Image ${index + 1}`}
                    className="photo-image"
                  />
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

