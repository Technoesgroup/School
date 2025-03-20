import React from "react";
import "../Styles/Module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PushPinIcon from "@mui/icons-material/PushPin";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import CloseIcon from "@mui/icons-material/Close"; // Import Close Icon

export default function Module({ closeModule }) {
  return (
    <div className="Module-overlay">
      <div className="Module-container">
        <div className="Module-card">
          <button className="Module-close" onClick={closeModule}>
            <CloseIcon />
          </button>
          <h2 className="Module-title">Exciting Opportunity for Students & Parents!</h2>
          <div className="Module-line"></div>
          <p className="Module-description">
            IIT Patna invites students (Class 9 & above) and parents to an exclusive
            <span className="Module-highlight"> Career Counselling Session</span> on
            <span className="Module-highlight"> 23rd March 2025</span> at IIT Patna Campus.
          </p>

          <div className="Module-speakers">
            <h3 className="Module-sub-title">Speakers:</h3>
            <ul>
              <li>
                <span className="Module-highlight">VJ Sir (Vishal Joshi)</span> – Renowned mentor & motivational speaker
              </li>
              <li>
                <span className="Module-highlight">Shri T N Singh</span> – Hon’ble Director, IIT Patna
              </li>
            </ul>
          </div>

          <div className="Module-event-details">
            <h3 className="Module-sub-title">📅 Event Details:</h3>
            <ul>
              <li>
                <CalendarMonthIcon className="Module-icon" /> <strong>Date:</strong> 23rd March 2025
              </li>
              <li>
                <AccessAlarmsIcon className="Module-icon" /> <strong>Time:</strong> 11:00 AM onwards
              </li>
              <li>
                <LocationOnIcon className="Module-icon" /> <strong>Venue:</strong> IIT Patna
              </li>
              <li>
                <PushPinIcon className="Module-icon" /> <strong>Confirm by:</strong> 22nd March 2025 via email at{" "}
                <span className="Module-email">iitpatna.bih@gmail.com</span>
              </li>
            </ul>
          </div>

          <p className="Module-footer">Don’t miss out!!</p>
        </div>
      </div>
    </div>
  );
}
