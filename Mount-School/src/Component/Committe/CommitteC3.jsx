import React from "react";
import "../../Styles/Committies-CSS/CommittiesC3.css";

const DocumentSection = () => {
  const documents = [
    { id: "pta-section", title: "PTA Members", description: "Access the academic calendar detailing all public holidays, term breaks, and special occasions for the academic year." },
    { id: "smc-section", title: "SMC", description: "Download the comprehensive document outlining the school’s rules, policies, and expected conduct for students, parents, and staff." },
  ];

  return (
    <div className="Committie-document-container">
      {documents.map((doc) => (
        <div key={doc.id} id={doc.id} className="Committie-document-card">
          <div className="Committie-document-content">
            <h3 className="Committie-document-title">{doc.title}</h3>
            <p className="Committie-document-description">{doc.description}</p>
          </div>
          <button className="Committie-download-button">Download</button>
        </div>
      ))}
    </div>
  );
};

export default DocumentSection;

