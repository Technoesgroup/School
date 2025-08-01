import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../Styles/Gallery-CSS/GalleryC3.css";

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("https://school-1lst.onrender.com/api/view-videos");
        setVideos(response.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="gallery-container">
      <h2>GALLERY - VIDEOS & PHOTOS</h2>
      <h3>Video Gallery</h3>

      <div className="GalleryC4-video-grid">
        {videos.map((item, index) => (
          <div key={index} className="video-card">
            <iframe
              width="560"
              height="315"
              src={item.videoLink}
              title={`Video-${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;






    // { id: 1, videoLink: "https://www.youtube.com/embed/_iWs_2FSgq8" },
    // { id: 2, videoLink: "https://www.youtube.com/embed/dIXF7l9bsPQ" },
    // { id: 3, videoLink: "https://www.youtube.com/embed/dZjMWAZGvjw" },
    // { id: 4, videoLink: "https://www.youtube.com/embed/z6nPOrGMu-g" },
    // { id: 5, videoLink: "https://www.youtube.com/embed/j1YS987Quzc" },
    // { id: 6, videoLink: "https://www.youtube.com/embed/WHCBoIndSyQ" },
    // { id: 7, videoLink: "https://www.youtube.com/embed/2KZte3mfIIw" }, 
    // { id: 8, videoLink: "https://www.youtube.com/embed/01vJV_iUQ0o" },
    // { id: 9, videoLink: "https://www.youtube.com/embed/BEB35iqRqIA" }, 