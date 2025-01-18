import React, { useEffect } from "react";
import "../../Styles/Committies-CSS/CommittiesC3.css";
import { useLocation } from "react-router-dom";

const DocumentSection = () => {
  const documents = [
    { id: "pta-section", title: "PTA Members", description: "Access the academic calendar detailing all public holidays, term breaks, and special occasions for the academic year." },
    { id: "pta-section", title: "SMC", description: "Download the comprehensive document outlining the school’s rules, policies, and expected conduct for students, parents, and staff." },
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

  return (
    <div  className="Committie-document-container">
      {documents.map((doc) => (
        <section key={doc.id} id={doc.id} className="Committie-document-card">
          <div className="Committie-document-content">
            <h3 className="Committie-document-title">{doc.title}</h3>
            <p className="Committie-document-description">{doc.description}</p>
          </div>
          <button className="Committie-download-button">Download</button>
        </section>
      ))}
    </div>
  );
};

export default DocumentSection;

