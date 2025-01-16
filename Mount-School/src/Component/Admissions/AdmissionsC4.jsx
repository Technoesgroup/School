import React from "react";
import "../../Styles/Admission-CSS/AdmissionC4.css"; // CSS file ka import
import location from '../../image/location.png';
import certificate from '../../image/certificate.png';
import certificateOff from '../../image/Certificate-offical.png';
import certificateOff2 from '../../image/certificate-offical2.png';
import proof from '../../image/proof-reading 1.png';
import Id  from '../../image/identity-card 1.png';
import  photo from '../../image/image-Gallery1.png';
import  report from '../../image/report-card 1.png';

const AdmissionsC4 = () => {
  const documentList = [
    { id: 1, icon: proof, text: "Birth Certificate Copy" },
    { id: 2, icon: photo, text: "6 coloured passport size photos of child in school uniform" },
    { id: 3, icon: photo, text: "2 recent coloured passport size photos of both mother & father" },
    { id: 4, icon: certificate, text: "Aadhar Cards of Child & Parents" },
    { id: 5, icon:location , text: "Local Address Proof" },
    { id: 6, icon: report, text: "Previous Year Report Card / Transcript" },
    { id: 7, icon: certificateOff, text: "Original Transfer Certificate" },
    { id: 8, icon: Id, text: "Medical Fitness Certificate" },
    { id: 9, icon: certificateOff2, text: "Blood Group Proof" },
  ];

  return (
    <div className="documents-container">
      <h2 className="documents-title">Documents for Admissions:</h2>
      <p className="documents-subtitle">
        The following documents are required during admission:
      </p>
      <div className="documents-grid">
        {documentList.map((doc) => (
          <div key={doc.id} className="document-item">
            <div className="Adimission-icon">
                <img src={doc.icon} alt=""  className=" Admissions-img"/>
            </div>
            <p className="document-text">{doc.text}</p>
          </div>
        ))}
      </div>
      <p className="documents-footer">
        <strong>Kindly bring the originals & zerox of all documents mentioned above at the time of admission.</strong>
      </p>
    </div>
  );
};

export default AdmissionsC4;
