import React from 'react';
import '../Styles/ScrollingLine.css';
import { Link } from 'react-router-dom';

import newIcon from '../assets/Untitled design (7).png';

const links = [
  { name: 'CBSE Zonal Chess Tournament 2025-26' },

];

const ScrollingLine = () => {
  return (
     <div className="scrolling-container">
      <div className="scrolling-text">
 {links.map((item) => (
  <Link key={item.name} to="/mlzs-forms" className="scroll-link">
    <img src={newIcon} alt="new" className="new-image-icon" />
    {item.name}
  </Link>
))}

      </div>
    </div>
  );
};

export default ScrollingLine;

