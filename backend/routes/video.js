const express = require("express");
const { getAllVideos, addVideo } = require("../Controllers/VideoController");

const router = express.Router();

router.get("/view-videos", getAllVideos);
router.post("/add-videos", addVideo);

module.exports = router;


