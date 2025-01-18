import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Pages/HomePage/HomePage";
import About from "./Pages/AboutPage/About-Page";
import Academics from "./Pages/Academics/Academics-Page";
import Admission from "./Pages/Admissions-Page/Admission-Page";
import FooterTop from "./Component/FooterTop";
import CBSE from "./Pages/CBSE-page/CBSE-page";
import FacilitiePage from "./Pages/FacillitiesPage/Facillitie-Page";
import CommitteePage from "./Pages/Committe-Page/Committie-Page";
import DownloadPage from "./Pages/Download-Page/Download-Page";
import GalleryPage from "./Pages/GalleryPage/GalleryPage";
import ContactUs from "./Pages/ContactUs-Page/ContactUsPage";
import AdmissionForm from "./Component/Home/AdmissionForm";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  const [isFormVisible, setFormVisible] = useState(false);

  useEffect(() => {
    // Show the admission form only on the homepage
    if (location.pathname === "/") {
      setFormVisible(true);
    } else {
      setFormVisible(false);
    }
  }, [location]);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <>
      <NavBar toggleForm={toggleForm} />
      <Routes>
        <Route path="/Academics" element={<Academics />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/Facilities" element={<FacilitiePage />} />
        <Route path="/CBSE" element={<CBSE />} />
        <Route path="/Committee" element={<CommitteePage />} />
        <Route path="/Download" element={<DownloadPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/" element={<Home toggleForm={toggleForm} />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <FooterTop />
      <Footer />

      {/* Admission Form Overlay */}
      {isFormVisible && (
        <div className="Amission-overlay">
          <div className="admission-form-container">
            <AdmissionForm closeForm={toggleForm} />
          </div>
        </div>
      )}
    </>
  );
};

export default App;



