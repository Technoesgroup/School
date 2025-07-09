import React from "react";
import "../../Styles/Academics-CSS/AcademicsC14.css";
import  image from '../../image/Rectangle 23931.svg';

const KabaddiAchievement = () => {
  return (
    <div className="AcademicsC14-achievement-container">
      {/* Title Section */}
      <h1 className="AcademicsC14-achievement-title">
        Mount Litera Zee School, Bihta's Under-19 Kabaddi Team Clinches Gold at CBSE Cluster Championship
      </h1>

      {/* Content Section */}
      <p className="AcademicsC14-achievement-text">
        Mount Litera Zee School, Bihta proudly celebrated the triumph of its Under-19 Kabaddi team, which secured the gold medal at the CBSE Cluster Championship held at Kairali School, HEC Township, Ranchi. With this victory, the team also earned a coveted spot in the national-level competition.
      </p>

      <p className="AcademicsC14-achievement-text">
        The team’s success was driven by the exceptional performances of key players, including Mohammad Tauqueer, Siddharth Kumar, Saket Singh, Abhinav Kumar, Prabhat Kumar, Ravi Ranjan, Aryan Raj, and Yash Raj, who demonstrated remarkable skill in both attack and defence. Their individual efforts and cohesive teamwork played a vital role in bringing home the gold.
      </p>

      <p className="AcademicsC14-achievement-text">
        This victory was the result of months of rigorous training, dedication, and a strong sense of camaraderie.
      </p>

      {/* Image Section */}
      <div className="AcademicsC14-achievement-image-container">
        <img
          loading="lazy"
          src={image}
          alt="Kabaddi Team Champions"
          className="AcademicsC14-achievement-image"
        />
      </div>
    </div>
  );
};

export default KabaddiAchievement;
