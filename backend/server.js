const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Enquire = require("./Schema/EnquireForm");
const JobApplication = require("./Schema/Career");
const path = require("path");
require("dotenv").config();
const videoRoutes  = require("./routes/video");
const galleryRoutes = require("./routes/Gallery"); 

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;


const allowedOrigins = [
  "http://localhost:5173",                   
  "https://mlzsbihta.com"         
];

app.use(cors({
  origin: allowedOrigins,  
  credentials: true
}));


app.use('/uploads', express.static('uploads'));

app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));



app.use(express.json({ limit: "10mb" })); 
app.use(express.urlencoded({ limit: "10mb", extended: true })); 



mongoose.connect( MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));


app.use("/api", videoRoutes);
app.use("/api", galleryRoutes);

    app.post("/admission", async (req, res) => {
      try {
        const { First_Name, Last_Name, Phone_Number, Email, Location, Grade } = req.body;
    
        if (!First_Name || !Last_Name || !Phone_Number || !Email || !Location || !Grade) {
          return res.status(400).json({ error: "All fields are required" });
        }
    
        const newAdmission = new Enquire({
          First_Name,
          Last_Name,
          Phone_Number,
          Email,
          Location,
          Grade,
        });
    
        await newAdmission.save();
        res.status(200).json({ message: "Admission form submitted successfully" });
      } catch (error) {
        console.error("Error saving admission form:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
    


    app.post("/JobApplication", async (req, res) => {
      try {
        const { 
          fullName, phone, email, gender, dob, address, position, subject, 
          resumeFile, resumeMimeType, resumeName, 
          photoFile, photoMimeType, photoName 
        } = req.body;
    
        if (!fullName || !phone || !email || !gender || !dob || !address || !position || !subject || !photoFile || !resumeFile) {
          return res.status(400).json({ error: "All fields are required" });
        }
    
        const newApplication = new JobApplication({
          fullName,
          phone,
          email,
          gender,
          dob,
          address,
          position,
          subject, // Ensure subject is passed
          photoFile, // Corrected field name
          photoMimeType,
          photoName,
          resumeFile, // Corrected field name
          resumeMimeType,
          resumeName,
        });
    
        await newApplication.save();
        res.status(200).json({ message: "Application submitted successfully" });
      } catch (error) {
        console.error("Error saving job application:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
    
    
    
  

  app.get("/admission", async (req, res) => {
    try {
      const admissions = await Enquire.find(); // Fetch all records
      res.status(200).json(admissions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch admissions data" });
    }
  });


  app.get("/JobApplication", async (req, res) => {
    try {
      const applications = await JobApplication.find();
      res.status(200).json(applications);
    } catch (error) {
      console.error("Error fetching applications:", error);
      res.status(500).json({ message: "Failed to fetch applications" });
    }
  });



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));