import React, { useState } from "react";
import "../Styles/Navbar.css";
import logo from "../image/LogoMLZS.svg";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = ({ toggleForm }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleMenuClick = (menuName) => {
    setActiveItem(menuName);
  };

  const handleMouseEnter = (menuName) => {
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const dropdownItems = {
    About: [
      { label: "About the school", to: "About-section" },
      { label: "Vision", to: "Vision-section" },
      { label: "Mission", to: "Mision-section" },
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
    Committee: [
      { label: "PTA", to: "pta-section" },
      { label: "SMC", to: "smc-section" },
    ],
    Download: [
      { label: "Sample Paper X", to: "Sample-paper-section" },
      { label: "CBSE Circular", to: "CBSE-Paper-section" },
      { label: "Book List", to: "Book-list-section" },
      { label: "Holiday List", to: "Holiday-section" },
    ],
  };

  return (
    <header className="nav-header">
      <div className="header-top">
        <img src={logo} alt="Logo" className="logo" />
        <div className="contact-info-nav">
          <span className="two-numbers">
            <a href="tel:+919771485809" className="contact-link">
              <PhoneIcon className="Navbar-Phone" />
              +91 9771485809
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
        <button className="enquire-btn" onClick={toggleForm}>
          ENQUIRE NOW
        </button>
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
        <ul className={`navb-items ${isMobileMenuOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/"
              onClick={() => {
                handleMenuClick("Home");
                closeMobileMenu();
              }}
            >
              Home
            </Link>
          </li>

          {Object.keys(dropdownItems).map((menu, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(menu)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={`/${menu.toLowerCase()}`}
                onClick={() => {
                  handleMenuClick(menu);
                  closeMobileMenu();
                }}
              >
                {menu}
              </Link>
              <ArrowDropDownIcon className="arrow-icon" />
              {activeDropdown === menu && (
                <div className="dropdown">
                  {dropdownItems[menu].map((item, idx) => (
                    <Link
                      key={idx}
                      to={`/${menu.toLowerCase()}#${item.to}`}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}

          <li>
            <Link
              to="/CBSE"
              onClick={() => {
                handleMenuClick("CBSE");
                closeMobileMenu();
              }}
            >
              CBSE
            </Link>
          </li>
          <li>
            <Link
              to="/Facilities"
              onClick={() => {
                handleMenuClick("Facilities");
                closeMobileMenu();
              }}
            >
              Facilities
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              onClick={() => {
                handleMenuClick("Gallery");
                closeMobileMenu();
              }}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              onClick={() => {
                handleMenuClick("Contact Us");
                closeMobileMenu();
              }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


