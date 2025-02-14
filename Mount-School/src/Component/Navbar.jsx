import React, { useEffect, useState } from "react";
import "../Styles/Navbar.css";
import logo from "../image/LogoMLZS.svg";
import PhoneIcon from "@mui/icons-material/Phone";
import { NavLink, useNavigate } from "react-router-dom"; // Use NavLink instead of Link
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = ({ toggleForm }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate =  useNavigate();

  useEffect(() => {
    navigate('/');  
  }, []);

  const handleMouseEnter = (menuName) => {
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log("Menu Open:", !isMobileMenuOpen);
  };
  

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const dropdownItems = {
    About: [
      { label: "About the school", to: "About-section" },
      { label: "Vision", to: "Vision-section" },
      { label: "Mission", to: "Mission-section" },
      { label: "Management", to: "Management-section" },
      { label: "Awards & Honors", to: "Awards-section" },
    ],
    Academics: [
      { label: "Learning Pathways", to: "Learning-section" },
      { label: "Co-Curricular Activities", to: "Activities-section" },
    ],
    Admission: [
      { label: "Overview", to: "Overview-section" },
      { label: "Admission Process", to: "Admission-section" },
      { label: "Course & Fee", to: "Course&Fee-section" },
    ],
    CBSE:[
      { label: "Holidays", to: "Holiday-section" },
      { label: "Curriculum", to: "Curriculum-section" },
      { label: "Affiliation Letter", to: "Affiliation-section" },
      { label: "NOC ", to: "NOC-section" },
      { label: "Recognition Certificate", to: "Recognition-section" },
      { label: "Trust Deed", to: "Trust-section" },

    ],
    Committee: [
      { label: "PTA", to: "pta-section" },
      { label: "SMC", to: "smc-section" },
    ],
    Download: [
      { label: "Sample Paper X", to: "Sample-paper-section" },
      { label: "CBSE Circular", to: "CBSE-Paper-section" },
      { label: "Book List", to: "Book-list-section" },
    ],
  };

  return (
    <header className="nav-header">
      <div className="header-top">
        <img src={logo} alt="Logo" className="logo" />
        <div className="contact-info-nav">
          <span className="two-numbers">
            <a href="tel:+919771485809" className="contact-link first-num">
              <PhoneIcon className="Navbar-Phone" />
              +91 9771485809,
            </a>
            <a href="tel:+919771485810" className="contact-link dusra-num">
              +91 9771485810
            </a>
          </span>
          <span className="email-text">
            <a href="mailto:mlzsbihta@gmail.com" className="contact-link">
              <EmailIcon className="Navbar-mail" /> mlzsbihta@gmail.com
            </a>
          </span>
        </div>
     <div>
       <button className="carrer-btn" onClick={() => navigate('/Careers')} >
          CAREERS 
        </button>
        <button className="enquire-btn" onClick={toggleForm}>
          ENQUIRE
        </button>
     </div>
      </div>

      <nav className="header-nav">
        <img src={logo} alt="Logo" className="mobile-logo" />
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <CloseIcon className="close-icon menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
          
        </div>
        <ul className={`navb-items ${isMobileMenuOpen ? "mobileNav-open" : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>

          {Object.keys(dropdownItems).map((menu, index) =>(
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(menu)}
              onMouseLeave={handleMouseLeave}
            >
             <NavLink
                to={`/${menu.toLowerCase()}`}
                onClick={closeMobileMenu}
              >
                {menu}
              </NavLink>
              <ArrowDropDownIcon className="arrow-icon" />
              {activeDropdown === menu && (
                <div className="dropdown">
                  {dropdownItems[menu].map((item, idx) =>(
                    <NavLink
                      key={idx}
                      to={`/${menu.toLowerCase()}#${item.to}`}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
          ))}

          <li>
            <NavLink
              to="/Facilities"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMobileMenu}
            >
              Facilities
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMobileMenu}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              onClick={closeMobileMenu}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;



