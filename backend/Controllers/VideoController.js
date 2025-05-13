const Video = require("../Schema/Video");

// Get all videos
const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch videos" });
  }
};

// Add a new video
const addVideo = async (req, res) => {
  try {
    const { videoLink } = req.body;
    const newVideo = new Video({ videoLink });
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    res.status(500).json({ error: "Failed to add video" });
  }
};

module.exports = { getAllVideos, addVideo }; // dono function export kar diye
