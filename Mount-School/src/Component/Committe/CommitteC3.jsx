import React, { useEffect } from "react";
import "../../Styles/Committies-CSS/CommittiesC3.css";
import useScrollToSection from "../Hook/CustomHook";
import image1 from '../../image/393834027_792046122934137_8956640947945114484_n.jpg';
import image2 from '../../image/1B7A5022.jpg';


const DocumentSection = () => {

  useScrollToSection();
  
    const sections = [
      {
        id:"pta-section",
        title: "PTA Members",
        description:
          "The Parent-Teacher Association (PTA) bridges parents, teachers, and school administration to enhance students' educational experience. It fosters collaboration, supports school initiatives, and organizes events like meetings, workshops, and cultural programs. By engaging in PTA activities, parents contribute to a supportive and inclusive school environment. ",
        image: image1, // Replace with the actual path
        buttonText: "Download",
        pdf: "/PDF/PTA.pdf",
      },
      {
        id:"SMC-section",
        title: "SMC",
        description:
          "The SMC ensures efficient school governance, upholding its vision and values. Comprising management, teachers, and parents, it oversees policy decisions, academics, infrastructure, and teacher training. Committed to high-quality education and a safe environment, the SMC drives continuous improvement, fostering holistic development and excellence. ",
        image:image2, // Replace with the actual path
        buttonText: "Download",
        pdf: "/PDF/SMC.pdf",
      },
    ];


    


   function SectionCard({ id, title, description, image, buttonText, reverse, pdf }) {
    return (
      <div id={id} className={`Committee-section-card ${reverse ? "Committee-reverse" : ""}`}>
        <div className="Committee-text-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={pdf} download>
          <button className="Committee-download-btn">{buttonText}</button>
        </a>
        </div>
       <section  className="Committee-IMAGE-SECTION-Contains">
       <img   loading="lazy" src={image} alt={title} className="Committee-section-image" />
       <div  className="Committee-corner-border"></div>
       </section>
      </div>
    );
  }

  return (
    <div className="Committee-app-container">
    {sections.map((sec, index) => (
      <SectionCard
        key={index}
        id={sec.id}
        title={sec.title}
        description={sec.description}
        image={sec.image}
        buttonText={sec.buttonText}
        pdf={sec.pdf} 
      />
    ))}
  </div>
  );
};

export default DocumentSection;

