// middlewares/uploadMiddleware.js
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/svg+xml"];

if (allowedTypes.includes(file.mimetype)) {
  cb(null, true);
} else {
  cb(new Error("Only images are allowed (.jpg, .jpeg, .png, .webp)"));
}
};

const upload = multer({ storage, fileFilter });

const galleryUploadMiddleware = upload.fields([
  { name: "coverImage", maxCount: 1 },
  { name: "images", maxCount: 20 },
]);

module.exports = galleryUploadMiddleware;
