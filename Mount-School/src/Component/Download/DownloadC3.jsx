import React from "react";
import "../../Styles/Download-CSS/DownloadC3.css";

const DocumentSection = () => {
  const documents = [
    { id: "Sample_Paper-section", title: "Sample Paper X", description: "Access the academic calendar detailing all public holidays, term breaks, and special occasions for the academic year." },
    { id: "CBSE_CIRCULAR-section", title: "CBSE CIRCULAR", description: "Download the comprehensive document outlining the school’s rules, policies, and expected conduct for students, parents, and staff." },
    { id: "Book_List-section", title: "Book List", description: "Download the comprehensive document outlining the school’s rules, policies, and expected conduct for students, parents, and staff." },
    { id: "Holiday_List-section", title: "Holiday List", description: "Download the comprehensive document outlining the school’s rules, policies, and expected conduct for students, parents, and staff." },
  ];

  return (
    <div className="DownloadC3-document-container">
      {documents.map((doc) => (
        <div key={doc.id} id={doc.id} className="DownloadC3-document-card">
          <div className="DownloadC3-document-content">
            <h3 className="DownloadC3-document-title">{doc.title}</h3>
            <p className="DownloadC3-document-description">{doc.description}</p>
          </div>
          <button className="DownloadC3-download-button">Download</button>
        </div>
      ))}
    </div>
  );
};

export default DocumentSection;
