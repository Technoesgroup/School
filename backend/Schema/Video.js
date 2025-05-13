const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    videoLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);

module.exports = Video; // export default mat use karo, sirf module.exports

