import React, { useState } from "react";
import axios from "axios";
import "./VideoPage.css"; // external css

const VideoUploader = () => {
  const [videoLink, setVideoLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!videoLink.trim()) {
      alert("Please enter a video link");
      return;
    }

    try {
      const response = await axios.post("https://school-1lst.onrender.com/api/add-videos", {
        videoLink,
      });
      alert("Video added successfully!");
      setVideoLink(""); // Clear input
    } catch (error) {
      console.error(error);
      alert("Failed to add video");
    }
  };

  return (
    <div className="video-uploader-container">
      <h2>Add a New Video</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter video link"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
        />
        <button type="submit">Add Video</button>
      </form>
    </div>
  );
};

export default VideoUploader;
