import React from "react";
import { motion } from "framer-motion";
import "../../Styles/Home-CSS/HomeC5.css"; 
import LibraryImg from "../../image/Library.jpg";
import PlaygroundImg from "../../image/Sports.jpg";
import SmartClassroomImg from "../../image/SmartClass.jpg";
import ScienceLabImg from "../../image/Chemlab.jpg";
import girlImg from "../../image/Dance.jpg";
import { useNavigate } from 'react-router-dom';
import ComputerLabImg from "../../image/ComputerLab.jpg";

const Facilities = () => {

    const navigate = useNavigate();

    const handleApllybtn = ()=>{
      navigate("/Facilities")
    }

  const facilities = [
    { title: "LIBRARY", image: LibraryImg, description1: 'LIBRARY', description2: 'The School offers over 5000 books, journals, and resources that inspire learning, nurture imagination, and support intellectual growth.' },
    { title: "SPORTS & OPEN GYM", image: PlaygroundImg, description1: 'SPORTS & OPEN GYM', description2: 'The School provides students with opportunities to stay active, build teamwork, and develop discipline through a variety of outdoor sports and fitness training.' },
    { title: "SMART CLASSROOM", image: SmartClassroomImg, description1: 'SMART CLASSROOM', description2: 'The School is equipped with advanced interactive technology, seamlessly blending traditional teaching with digital tools.' },
    { title: "SCIENCE LAB", image: ScienceLabImg, description1: 'SCIENCE LAB', description2: 'The school has four different labs for Physics, Biology, Chemistry & Mathematics' },
    { title: "DANCE STUDIO", image: girlImg, description1: 'DANCE STUDIO', description2: 'The school fosters creativity and discipline, offering a professional space for students to explore various dance forms and enhance physical fitness.' },
    { title: "COMPUTER LAB", image: ComputerLabImg, description1: 'COMPUTER LAB', description2: 'The school has 50+ systems, equipping students for a tech-driven future through coding, design, and digital skills.' },
  ];

  return (
    <motion.div
      className="Home5-facilities-contains"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="Home5-facilities-title">
        Facilities at <span className="Home5-school-name"> Mount Litera Zee School</span>
      </h2>
      <div className="Home5-facilities-grid">
        {facilities.map((facility, index) => (
          <motion.div
            key={index}
            className="Home5-facility-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={facility.image} alt={facility.title} className="Home5-facility-image" />
            <div className="Home5-facility-title">{facility.title}</div>
            <div className="Home5-facility-overlay">
              <div className="Home5-facility-title-overlay-D1">{facility.description1}</div>
              <div className="Home5-facility-title-overlay-D2">{facility.description2}</div>
            </div>
          </motion.div>
        ))}
       
      </div>
      <button  className="Home5-facility-button"  onClick={handleApllybtn}>View All</button>
    </motion.div>
  );
};

export default Facilities;

