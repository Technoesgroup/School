import React, { useState } from "react";
import "../Styles/Navbar.css";
import logo from "../image/Logo Sticker 8cm (1)_page-0001.png";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menuName) => {
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () =>{
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
      { label: "About the school", to: "about-1" },
      { label: "Vision & Mission", to: "about-2" },
      { label: "Management", to: "about-2" },
      { label: "Awards & Honors", to: "about-2" },
    ],
    Academics: [
      { label: "  Learning Pathways ", to: "academics-1" },
      { label: "Co-Curricular Activities ", to: "academics-2" },
    ],
    Admission: [
      { label: "Process", to: "admission-1" },
      { label: "Fee Structure", to: "admission-2" },
    ],
    Committee: [
      { label: "PTA", to: "committee-1" },
      { label: "Disciplinary", to: "committee-2" },
    ],
    Download: [
      { label: "Syllabus", to: "download-1" },
      { label: "Forms", to: "download-2" },
    ],
  };

return (
    <header className="header">
      <div className="header-top">
        <img src={logo} alt="Logo" className="logo" />
        <div className="contact-info-nav">
          <span>
            <PhoneIcon className="Phone" /> +91 9771485809
          </span>
          <span>
            <EmailIcon className="mail" /> mlzsbihta@gmail.com
          </span>
        </div>
        <button className="enquire-btn">ENQUIRE NOW</button>
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
        <ul className={`nav-items ${isMobileMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          {Object.keys(dropdownItems).map((menu, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(menu)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={`/${menu.toLowerCase()}`} onClick={closeMobileMenu}>
                {menu}
              </Link>
              <ArrowDropDownIcon className="arrow-icon" />
              {activeDropdown === menu && (
                <div className="dropdown">
                  {dropdownItems[menu].map((item, idx) => (

                    <ScrollLink key={idx}  to={item.to} smooth={true} duration={500}  onClick={closeMobileMenu}>
                      {item.label}
                    </ScrollLink>
                  ))}
                </div>
              )}
            </li>
          ))}

          <li>
            <Link to="/CBSE" onClick={closeMobileMenu}>
              CBSE
            </Link>
          </li>
          <li>
            <Link to="/Facilities" onClick={closeMobileMenu}>
              Facilities
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={closeMobileMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact-us" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;