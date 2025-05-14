const express = require("express");
const galleryUploadMiddleware = require("../Middleware/UploadMiddleware");
const router = express.Router();
const {
  getAllGalleryCategories,
  getGalleryById,
  addGallery, 
} = require("../Controllers/GalleryController");

router.get("/getallgallery", getAllGalleryCategories);
router.get("/gallery/:id", getGalleryById);
router.post("/add-Gallery", galleryUploadMiddleware, addGallery); // 🔽 POST /api/gallery

module.exports = router;
