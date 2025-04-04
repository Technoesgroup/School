const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  dob: { type: Date, required: true },
  address: { type: String, required: true },
  position: { type: String, required: true },
  subject: { type: String, required: true }, // Subject selected for teaching
  photoFile: { type: String, required: true }, // Base64-encoded image
  photoMimeType: { type: String, required: true }, // Image MIME type (e.g., "image/png")
  photoName: { type: String, required: true }, // Image file name
  resumeFile: { type: String, required: true }, // Base64-encoded PDF/Doc
  resumeMimeType: { type: String, required: true }, // Resume MIME type (e.g., "application/pdf")
  resumeName: { type: String, required: true }, // Resume file name
}, { timestamps: true });

const JobApplication = mongoose.model("JobApplication", jobApplicationSchema);
module.exports = JobApplication;
