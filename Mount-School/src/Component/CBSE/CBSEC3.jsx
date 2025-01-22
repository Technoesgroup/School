import React from "react";
import "../../Styles/CBSE-CSS/CBSEC3.css";
import image1 from '../../image/Calender.png';
import image2 from '../../image/377790227_768746751930741_393656229437923242_n.jpg';
import image3 from '../../image/Circulum.png';
import image4 from '../../image/Affilication.png';
import image5 from '../../image/NOC.png';
import image6 from '../../image/jj.png';
import image7 from '../../image/hh.png';


const DocumentSection = () => {

  const sections = [
    {
      id:"Holiday-section",
      title: "CBSE Holidays",
      description:
        "Stay updated with the official CBSE holiday schedule for the academic year. The list includes all national and regional holidays observed by our school, ensuring a smooth and planned academic year.",
      image: image1, // Replace with the actual path
      buttonText: "Download PDF",
      pdf: "/pdfs/CBSE_Holidays.pdf",
    },
    {
      id:"Holiday-section",
      title: "Norms",
      description:
        "Our school follows CBSE norms to maintain a high standard of education. This includes guidelines for classroom practices, evaluation, attendance, and extracurricular activities that align with the CBSE framework.",
      image:image2, // Replace with the actual path
      buttonText: "Download PDF",
      pdf: "/pdfs/CBSE_Holidays.pdf",
    },
    {
      id:"Norms-section",
      title: "Curriculum",
      description:
      "We provide a well-structured curriculum designed by CBSE to foster holistic growth, including subjects, co-curricular activities, and special programs aimed at developing students' academic and personal skills.",
      image: image3, // Replace with the actual path
      buttonText: "Download PDF",
      pdf: "/pdfs/CBSE_Holidays.pdf",
    },
    {
      id:"Curriculum-section",
      title: "Affiliation Letter",
      description:
      "This document is the official confirmation of our school’s affiliation with CBSE. It assures parents and guardians of the school’s adherence to the CBSE’s rules and regulations, ensuring quality education.",
      image: image4, // Replace with the actual path
      buttonText: "Download PDF",
      pdf: "/pdfs/CBSE_Holidays.pdf",
    },
    {
      id:"Curriculum-section",
      title: "NOC (No Objection Certificate)",
      description:
      'The NOC is issued by the Education Department, confirming that the school is recognized and authorized to operate. It is an essential document for the establishment and management of educational institutions.',
      image: image5, // Replace with the actual path
      buttonText: "Download PDF",
      pdf: "/pdfs/CBSE_Holidays.pdf",
    },
    {
      id:"Affiliation-section",
      title: "Recognition Certificate",
      description:
        "We are proud to announce that our school has been honored with a Recognition Certificate by the Central Board of Secondary Education (CBSE). This achievement reflects our commitment to academic excellence, holistic development, and adherence to the highest educational standards.",
      image:image6, // Replace with the actual path
      buttonText: "Download PDF",
      pdf: "/pdfs/CBSE_Holidays.pdf",
    },
    {
      id:"NOC-section",
      title: "Trust Dead",
      description:
        "Legal trust deed documentation outlining the governance and management structure of the school.",
      image:image7, // Replace with the actual path
      buttonText: "Download PDF",
      pdf: "/pdfs/CBSE_Holidays.pdf",
    },

  ];

  function SectionCard({ id, title, description, image, buttonText, reverse }) {
    return (
      <div  id={id} className={`CBSEC3-section-card ${reverse ? "CBSEC3-reverse" : ""}`}>
        <div className="CBSE3-text-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <a href='' download>
          <button className="CBSE3-download-btn">{buttonText}</button>
        </a>
        </div>
       <section  className="CBSE-IMAGE-SECTION-Contains">
       <img src={image} alt={title} className="CBSE3-section-image" />
       <div  className="CBSE3-corner-border"></div>
       </section>
      </div>
    );
  }
  
  return (
    <div className="CBSE3-app-container">
      {sections.map((sec, index) => (
        <SectionCard
          key={index}
          id={sec.id}
          title={sec.title}
          description={sec.description}
          image={sec.image}
          buttonText={sec.buttonText}
          reverse={index % 2 === 1} // Alternate layout
        />
      ))}
    </div>
  );

};

export default DocumentSection;


