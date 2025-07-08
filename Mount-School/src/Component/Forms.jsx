import React from 'react';
import '../Styles/Forms.css';

// Import images
import img1 from '../image/Screenshot 2025-07-08 160403.png';
import img2 from '../image/Screenshot 2025-07-08 160341.png';
import img3 from '../image/Screenshot 2025-07-08 160318.png';
import img4 from '../image/Screenshot 2025-07-08 160258.png';
import img5 from '../image/Screenshot 2025-07-08 160232.png';
import img6 from  '../image/Screenshot 2025-07-08 160426.png';

// Import PDFs
import pdf1 from '../assets/Chess Team Name Reporting Format (1).pdf';
import pdf2 from '../assets/Group Photograph.pdf';
import pdf3 from '../assets/Institutional Rules & Regulations.pdf';
import pdf4 from '../assets/Undertaking.pdf';
import pdf5 from '../assets/Organisational Rules.pdf';
import pdf6 from '../assets/Medical fitness Certificate.pdf'

const pdfData = [
  { title: "Group Photograph", image: img1, file: pdf1 },
  { title: "Undertaking", image: img2, file: pdf2 },
  { title: "Institutional Rules & Regulations", image: img3, file: pdf3 },
  { title: "Chess Team Name Reporting", image: img4, file: pdf4 },
  { title: "Organisational Rules", image: img5, file: pdf5 },
  { title: "Medical fitness Certificate", image: img6, file: pdf6 },
];

const Forms = () => {
  return (
    <div className="form-pdf-section">
      <h2 className="form-section-title">Important PDF Forms</h2>
      <div className="form-pdf-card-container">
        {pdfData.map((pdf, index) => (
          <div className="form-pdf-card" key={index}>
            <img src={pdf.image} alt={pdf.title} className="form-pdf-image" />
            <h3 className="form-pdf-title">{pdf.title}</h3>
            <a href={pdf.file} download className="form-download-btn">
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forms;

