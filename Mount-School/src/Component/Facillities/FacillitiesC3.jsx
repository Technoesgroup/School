import React from "react";
import "../../Styles/Facillities-CSS/FacillitiesC3.css"; // Add a CSS file for styling
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
    <div className="facilities-container">
      <h2 className="facilities-title">
        Facilities 
      </h2>
      <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <div key={index} className="facility-item">
            <img
              src={facility.image}
              alt={facility.title}
              className="facility-image"
            />
            <div className="facility-title">{facility.title}</div>
            <div className="facility-overlay">
              <div className="facility-title-overlay-D1">{facility.description1}</div><br></br>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Facilities;