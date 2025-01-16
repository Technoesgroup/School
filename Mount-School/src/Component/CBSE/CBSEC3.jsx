import React from "react";
import "../../Styles/CBSE-CSS/CBSEC3.css";

const DocumentSection = () => {
  const documents = [
    { id: "Holiday-section", title: "Holiday", description: "Access the academic calendar detailing all public holidays, term breaks, and special occasions for the academic year." },
    { id: "Norms-section", title: "Norms", description: "Download the comprehensive document outlining the school’s rules, policies, and expected conduct for students, parents, and staff." },
    { id: "Curriculum-section", title: "Curriculum", description: "Access the academic calendar detailing all public holidays, term breaks, and special occasions for the academic year." },
    { id: "Affiliation-section", title: "Affiliation Letter", description: "Download the comprehensive document outlining the school’s rules, policies, and expected conduct for students, parents, and staff." },
    { id: "Trust-section", title: "Trust Deed", description: "Access the academic calendar detailing all public holidays, term breaks, and special occasions for the academic year." },
    { id: "NOC-section", title: "NOC", description: "Download the comprehensive document outlining the school’s rules, policies, and expected conduct for students, parents, and staff." },
    { id: "Recognition-section", title: "Recognition Certificate", description: "Download the comprehensive document outlining the school’s rules, policies, and expected conduct for students, parents, and staff." },
  ];

  return (
    <div className="CBSEC3-document-container">
      {documents.map((doc) => (
        <div key={doc.id} id={doc.id} className="CBSEC3-document-card">
          <div className="CBSEC3-document-content">
            <h3 className="CBSEC3-document-title">{doc.title}</h3>
            <p className="CBSEC3-document-description">{doc.description}</p>
          </div>
          <button className="CBSEC3-download-button">Download</button>
        </div>
      ))}
    </div>
  );
};

export default DocumentSection;


