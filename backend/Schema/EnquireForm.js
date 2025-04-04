const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema({
  First_Name: { type: String, required: true },
  Last_Name: { type: String, required: true },
  Phone_Number: {
    type: String,
    required: true,
    match: [/^(\+91)?[6-9]\d{9}$/, "Invalid phone number"], // Allows 10-digit Indian numbers, optionally with +91
  },
  Email: { type: String, required: true },
  Location: { type: String, required: true },
  Grade: { type: String, required: true },
});

const Admission = mongoose.model("Admission", admissionSchema);
module.exports = Admission;
