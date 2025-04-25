import React, { useState } from "react";
import TableViewIcon from '@mui/icons-material/TableView';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import SellIcon from '@mui/icons-material/Sell';
import mlzslogo from '../../image/LogoMLZS.svg';
import "../AdminPannelmlzs/MainPageAdmin.css";
import AdmissionList from '../AdminPages/ShowEnquirePage'; 
import CareerList from '../AdminPages/ShowCareerPage'; 

const Sidebar = ({ setActiveSection, activeSection }) => {
  return (
    <div className="MainPage-sidebar">
      {/* Logo */}
      <div className="MainPage-logo-container">
        <img src={mlzslogo} alt="Jambo Logo" className="MainPage-logo" />
      </div>
      <p className="MainPage-admin-text">Admin Panel</p>
      <nav>
        <button
          className={`MainPage-nav-button ${activeSection === "enquire" ? "active" : ""}`}
          onClick={() => setActiveSection("enquire")}
        >
          <TableViewIcon className="MainPage-icon" /> Enquire Form Data
        </button>
        <button
          className={`MainPage-nav-button ${activeSection === "Career-Form" ? "active" : ""}`}
          onClick={() => setActiveSection("Career-Form")}
        >
          <AllInboxIcon className="MainPage-icon" /> Career Form Data
        </button>
        <button
          className={`MainPage-nav-button ${activeSection === "Gallery" ? "active" : ""}`}
          onClick={() => setActiveSection("Gallery")}
        >
          <SellIcon className="MainPage-icon" /> Gallery
        </button>
      </nav>
    </div>
  );
};


const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState("enquire"); // Default to Enquire Form Data

  return (
    <div className="MainPage-admin-panel">
      <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
      <div className="MainPage-main-content">
        {activeSection === "enquire" && <AdmissionList />}
        {activeSection === "Career-Form" && <CareerList />}
        {activeSection === "Gallery" && <h2>Gallery Content</h2>}
      </div>
    </div>
  );
};


export default AdminPanel;
