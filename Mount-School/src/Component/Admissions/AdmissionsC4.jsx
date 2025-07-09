import React, { useEffect } from "react";
import "../../Styles/Admission-CSS/AdmissionC4.css"; // CSS file ka import
import location2 from '../../image/location.png';
import certificate from '../../image/certificate.png';
import certificateOff from '../../image/Certificate-offical.png';
import certificateOff2 from '../../image/certificate-offical2.png';
import proof from '../../image/proof-reading 1.png';
import Id  from '../../image/identity-card 1.png';
import  photo from '../../image/image-Gallery1.png';
import  report from '../../image/report-card 1.png';
import useScrollToSection from "../Hook/CustomHook2";

const AdmissionsC4 = () => {
  const documentList = [
    { id: 1, icon: proof, text: "Birth Certificate Copy" },
    { id: 2, icon: photo, text: "6 coloured passport size photos of child in school uniform" },
    { id: 3, icon: photo, text: "2 recent coloured passport size photos of both mother & father" },
    { id: 4, icon: certificate, text: "Aadhar Cards of Child & Parents" },
    { id: 5, icon: location2 , text: "Local Address Proof" },
    { id: 6, icon: report, text: "Previous Year Report Card / Transcript" },
    { id: 7, icon: certificateOff, text: "Original Transfer Certificate" },
    { id: 8, icon: Id, text: "Medical Fitness Certificate" },
    { id: 9, icon: certificateOff2, text: "Blood Group Proof" },
  ];

  useScrollToSection();

  return (
    <div className="AdmissionC4-documents-container">
      <h2 className="AdmissionC4-documents-title">Documents for Admissions:</h2>
      <p className="AdmissionC4-documents-subtitle">
        The following documents are required during admission:
      </p>
      <div className="AdmissionC4-documents-grid">
        {documentList.map((doc) => (
          <div key={doc.id} className="AdmissionC4-document-item">
            <div className="Adimission-icon">
                <img    loading="lazy" src={doc.icon} alt=""  className=" AdmissionC4-img"/>
            </div>
            <p className="AdmissionC4-document-text">{doc.text}</p>
          </div>
        ))}
      </div>
      <p className="AdmissionC4-documents-footer">
        <strong>Note :- Kindly bring the originals & xerox of all documents mentioned above at the time of admission.</strong>
      </p>
    </div>
  );
};

export default AdmissionsC4;
