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
    { title: "LIBRARY", image: LibraryImg ,  description1:'LIBRARY', description2:'The School offers over 5000 books, journals, and resources that inspire learning, nurture imagination, and support intellectual growth.'},
    { title: "SPORTS & OPEN GYM", image: PlaygroundImg,  description1:'SPORTS & OPEN GYM',description2:'SPORTS & OPEN GYM-The School provides students with opportunities to stay active, build teamwork, and develop discipline through a variety of outdoor sports and fitness training.' },
    { title: "SMART CLASSROOM", image: SmartClassroomImg,   description1:'SMART CLASSROOM',description2:'The School is equipped with advanced interactive technology, seamlessly blend traditional teaching with digital tools .' },
    { title: "SCIENCE LAB", image: ScienceLabImg,    description1:'SCIENCE LAB', description2:'The school has four different labs for Physics, Biology, Chemistry & Mathematics' },
    { title: "DANCE STUDIO", image: TransportImg ,   description1:'DANCE STUDIO', description2:'The school fosters creativity and discipline, offering a professional space for students to explore various dance forms and enhance physical fitness.'},
    { title: "COMPUTER LAB", image: ComputerLabImg,   description1:'COMPUTER LAB' ,description2:'The school has 50+ systems, equips students for a tech-driven future through coding, design, and digital skills.'},
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
              <div className="Home5-facility-title-overlay-D2">{facility.description2}</div>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Facilities;

