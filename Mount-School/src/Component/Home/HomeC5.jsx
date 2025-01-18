import React from "react";
import "../../Styles/Home-CSS/HomeC5.css"; // Add a CSS file for styling
import LibraryImg from "../../image/Library.png";
import PlaygroundImg from "../../image/user-cover-1.png";
import SmartClassroomImg from "../../image/fixed-height sec-.png";
import ScienceLabImg from "../../image/ChemistryLab.png";
import TransportImg from "../../image/transport.png";
import ComputerLabImg from "../../image/ComputerLab.png";

const Facilities = () => {
  const facilities = [
    { title: "Library", image: LibraryImg ,  description1:'Library'},
    { title: "Playground", image: PlaygroundImg,  description1:'Playground' },
    { title: "Smart Classroom", image: SmartClassroomImg,   description1:'Smart Classroom' },
    { title: "Science Lab", image: ScienceLabImg,    description1:'Science Lab' },
    { title: "Transport", image: TransportImg ,   description1:'Transport '},
    { title: "Computer Lab", image: ComputerLabImg,   description1:'Computer Lab' },
  ];

  return (
    <div className="Home5-facilities-container">
      <h2 className="Home5-facilities-title">
        Facilities at <span className="Home5-school-name"> Mount Litera Zee School</span>
      </h2>
      <div className="Home5-facilities-grid">
        {facilities.map((facility, index) => (
          <div key={index} className="Home5-facility-item">
            <img
              src={facility.image}
              alt={facility.title}
              className="Home5-facility-image"
            />
            <div className="Home5-facility-title">{facility.title}</div>
            <div className="Home5-facility-overlay">
              <div className="Home5-facility-title-overlay-D1">{facility.description1}</div><br></br>
              {/* <div className="facility-title-overlay">{facility.description2}</div> */}
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Facilities;

