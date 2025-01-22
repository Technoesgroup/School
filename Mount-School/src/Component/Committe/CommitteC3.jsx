import React, { useEffect } from "react";
import "../../Styles/Committies-CSS/CommittiesC3.css";
import { useLocation } from "react-router-dom";
import image1 from '../../image/393834027_792046122934137_8956640947945114484_n.jpg';
import image2 from '../../image/1B7A5022.jpg';


const DocumentSection = () => {

    const sections = [
      {
        id:"pta-section",
        title: "PTA Members",
        description:
          "The Parent-Teacher Association (PTA) acts as a vital link between parents and the school, fostering collaboration to enhance the overall educational experience. ",
        image: image1, // Replace with the actual path
        buttonText: "Download PDF",
        pdf: "/pdfs/CBSE_Holidays.pdf",
      },
      {
        id:"pta-section",
        title: "SMC",
        description:
          "The School Management Committee (SMC) ensures transparency and accountability in the school’s operations. ",
        image:image2, // Replace with the actual path
        buttonText: "Download PDF",
        pdf: "/pdfs/CBSE_Holidays.pdf",
      },
    ];

  const location = useLocation();

  useEffect(() => {
     if (location.hash) {
       const id = location.hash.replace('#', ''); // Remove the # from hash
       const element = document.getElementById(id); // Find the element by ID
       if (element) {
         element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the element
       }
     }
   }, [location]);


   function SectionCard({ id, title, description, image, buttonText, reverse }) {
    return (
      <div id={id} className={`Committee-section-card ${reverse ? "Committee-reverse" : ""}`}>
        <div className="Committee-text-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <a href='' download>
          <button className="Committee-download-btn">{buttonText}</button>
        </a>
        </div>
       <section  className="Committee-IMAGE-SECTION-Contains">
       <img src={image} alt={title} className="Committee-section-image" />
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
        reverse={index % 2 === 1} // Alternate layout
      />
    ))}
  </div>
  );
};

export default DocumentSection;

