import React from 'react';
import '../Styles/ScrollingLine.css';

// Import PDFs
import pdf1 from '../assets/Group Photograph.pdf';
import pdf2 from '../assets/Chess Team Name Reporting Format (1).pdf';
import pdf3 from '../assets/Institutional Rules & Regulations.pdf';
import pdf4 from '../assets/Medical fitness Certificate.pdf';
import pdf5 from '../assets/Organisational Rules.pdf';
import pdf6 from '../assets/Undertaking.pdf';

import newIcon from '../assets/Untitled design (7).png';

const links = [
  { name: 'Group Photograph', file: pdf1 },
  { name: 'Chess Team Name Reporting', file: pdf2 },
  { name: 'Institutional Rules & Regulations', file: pdf3 },
  { name: 'Medical fitness Certificate', file: pdf4 },
  { name: 'Organisational Rules', file: pdf5 },
  {name:'Undertaking', file:pdf6},
];

const ScrollingLine = () => {
  return (
     <div className="scrolling-container">
      <div className="scrolling-text">
        {links.map((item, index) => (
          <a
            key={index}
            href={item.file}
            download
            className="scroll-link"
          >
    

            {/* OR use image icon */}
            <img src={newIcon} alt="new" className="new-image-icon" />

            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ScrollingLine;

