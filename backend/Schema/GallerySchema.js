// models/Gallery.js
const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  coverImage: { type: String, required: true },
  images: { type: [String], required: true },
}, { timestamps: true });

const Gallery = mongoose.model("Gallery", gallerySchema);

module.exports = Gallery;
