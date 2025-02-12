import React from "react";
import "../../Styles/Academics-CSS/AcademicsC2.css";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function AcademicsC2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { label: "Learning Pathway",         target: "Learning-section" },
    { label: "Co-Curricular Activities", target: "Activities-section" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (targetId, index) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
      setActiveIndex(index);
      setIsMobileMenuOpen(false); // Close the mobile menu
    }
  };

  return (
    <div className="AcademicsC2-Ab-NAV">
      {/* Full-width menu for larger screens */}
      <div className="desktop-menu">
        <ul>
          {links.map((link, index) => (
            <li
              key={index}
              className={index === activeIndex ? "active" : ""}
              onClick={() => handleScroll(link.target, index)}
            >
              <span className="AcademicsC2-text-change">{link.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu with hamburger icon */}
      <div className="AcademicsC2-mobile-menu">
        <div className="AcademicsC2-menu-icon" onClick={toggleMobileMenu}>
          <MenuIcon />
        </div>

        {isMobileMenuOpen && (
          <div className="AcademicsC2-mobile-menu-content">
            <div className="AcademicsC2-close-icon" onClick={toggleMobileMenu}>
              <CloseIcon />
            </div>
            <ul className="AcademicsC2-menu-list">
              {links.map((link, index) => (
                <li
                  key={index}
                  className={index === activeIndex ? "active" : ""}
                  onClick={() => handleScroll(link.target, index)}
                >
                  <span className="Academics-text-change">{link.label}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AcademicsC2;