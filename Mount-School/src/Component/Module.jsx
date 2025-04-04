import React from "react";
import "../Styles/Module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PushPinIcon from "@mui/icons-material/PushPin";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close"; // Import Close Icon

export default function Module({ closeModule }) {
  return (
    <div className="Module-overlay">
      <div className="Module-container">
        <div className="Module-card">
          <button className="Module-close" onClick={closeModule}>
            <CloseIcon />
          </button>
          <h3 className="Module-title">Student Empowerment Programme (SEP) – Demo Classes Announcement</h3>
          <div className="Module-line"></div>
          <p className="Module-description">
            We are delighted to announce that <span className="Module-highlight">SEP Demo Classes</span> for Grades VI to X will commence from
            <span className="Module-highlight"> 7th April 2025</span> at Mount Litera Zee School, Bihta.
          </p>

          <div className="Module-speakers">
            <h3 className="Module-sub-title">About SEP:</h3>
            <p>
              SEP (Student Empowerment Programme) is an exclusive academic initiative designed to prepare our students for prestigious competitive examinations
              such as <span className="Module-highlight">IIT-JEE, NEET, Olympiads</span>, and other national-level tests.
              The programme focuses on building a strong conceptual foundation, sharpening analytical skills, and fostering scientific temperament among students from an early stage.
            </p>
          </div>

          <div className="Module-event-details">
            <h3 className="Module-sub-title">Event Details:</h3>
            <ul>
              <li>
                <CalendarMonthIcon className="Module-icon" /> <strong>Start Date:</strong> 7th April 2025
              </li>
              <li>
                <LocationOnIcon className="Module-icon" /> <strong>Venue:</strong> Mount Litera Zee School, Bihta
              </li>
              <li>
                <PushPinIcon className="Module-icon" /> <strong>Target Audience:</strong> Students of Grades VI to X
              </li>
            </ul>
          </div>

          <p className="Module-footer">
            We encourage all interested students and parents to take part in these demo sessions and experience the vision of SEP firsthand.
          </p>
          <p className="Module-footer">
            For further details, kindly contact the school office.
          </p>
        </div>
      </div>
    </div>
  );
}
