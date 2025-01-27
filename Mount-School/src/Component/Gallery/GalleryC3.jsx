import React from "react";
import "../../Styles/Gallery-CSS/GalleryC3.css";
import image1 from '../../image/20240210_142537.jpg';
import image2 from '../../image/Takonda.jpg';
import image3 from '../../image/IMG_20240726_195817.jpg';
import image4 from '../../image/398656726_799334345538648_1497034543001386452_n.jpg';


const VideoGallery = () => {
  const galleryData = [
    {
      id: 1,
      title: "Annual Day",
      image: image1,
      videoLink: "#",
    },
    {
      id: 2,
      title: "Taekwondo Program",
      image: image2,
      videoLink: "#",
    },
    {
      id: 3,
      title: "Independence Day",
      image: image3,
      videoLink: "#",
    },
    {
      id: 4,
      title: "Run For Unity Marathon",
      image: image4,
      videoLink: "#",
    },
  ];

  return (
    <div className="gallery-container">
      {/* Heading */}
      <h2>GALLERY - VIDEOS & PHOTOS</h2>
      <h3>Video Gallery</h3>

      {/* Video Cards */}
      <div className="GalleryC4-video-grid">
        {galleryData.map((item) => (
          <div key={item.id} className="video-card">
            <a href={item.videoLink} target="_blank" rel="noreferrer">
              <img
                src={item.image}
                alt={item.title}
                className="video-thumbnail"
              />
              <div className="play-button">
                <span>&#9654;</span>
              </div>
            </a>
            <p className="video-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
