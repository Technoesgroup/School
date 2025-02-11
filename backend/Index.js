require("dotenv").config(); // Load environment variables
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { First_Name, Last_Name, Phone_Number, Email, Location, Grade } = req.body;

  // Ensure all required fields are provided
  if (!First_Name || !Last_Name || !Phone_Number || !Email || !Location || !Grade) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  // Setup transporter with environment variables
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Use environment variable
      pass: process.env.EMAIL_PASS, // Use environment variable
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Replace with recipient email
    subject: `New Admission Inquiry from ${First_Name} ${Last_Name}`,
    text: `
      Parent's Name: ${First_Name} ${Last_Name}
      Email: ${Email}
      Phone: ${Phone_Number}
      Location: ${Location}
      Grade: ${Grade}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

