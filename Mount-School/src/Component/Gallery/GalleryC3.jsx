import React from "react";
import "../../Styles/Gallery-CSS/GalleryC3.css";

const VideoGallery = () => {
  const galleryData = [
    {
      id: 1,
      title: "Annual Day",
      image: "https://via.placeholder.com/400x250",
      videoLink: "#",
    },
    {
      id: 2,
      title: "Taekwondo Program",
      image: "https://via.placeholder.com/400x250",
      videoLink: "#",
    },
    {
      id: 3,
      title: "Independence Day",
      image: "https://via.placeholder.com/400x250",
      videoLink: "#",
    },
    {
      id: 4,
      title: "Run For Unity Marathon",
      image: "https://via.placeholder.com/400x250",
      videoLink: "#",
    },
  ];

  return (
    <div className="gallery-container">
      {/* Heading */}
      <h2>GALLERY - VIDEOS & PHOTOS</h2>
      <h3>Video Gallery</h3>

      {/* Video Cards */}
      <div className="video-grid">
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
