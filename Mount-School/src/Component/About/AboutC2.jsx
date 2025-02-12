import React from "react";
import "../../Styles/About-CSS/AboutC2.css";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function AboutC2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { label: "About the School", target: "About-section" },
    { label: "Vision & Mission", target: "Vision-section" },
    { label: "Management",       target: "Management-section" },
    { label: "Awards & Honors",  target: "Awards-section" },
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
      <div className="mobile-menu">
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <MenuIcon />
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu-content">
            <div className="close-icon" onClick={toggleMobileMenu}>
              <CloseIcon />
            </div>
            <ul className="menu-list">
              {links.map((link, index) => (
                <li
                  key={index}
                  className={index === activeIndex ? "active" : ""}
                  onClick={() => handleScroll(link.target, index)}
                >
                  <span className="About-text-change">{link.label}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutC2;

