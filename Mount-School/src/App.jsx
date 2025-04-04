import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
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
import CareersPage from "./Pages/CareersPage/CareersPage";
import PrivacyPolicy from "./Component/Privacy_Policy";
import MainPageAdmin from "./Component/AdminPannelmlzs/MainPageAdmin";
import Module from "./Component/Module";
import Login from "./Component/AdminLogin/AdminLogin";
import ProtectedRoute from "./Component/AdminLogin/PrivateRoute";
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isFormVisible, setFormVisible] = useState(false);
  const [isModuleVisible, setModuleVisible] = useState(true);
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("defaultUser"); 
    setIsLoggedIn(false);
    navigate("/login");
  };

  const toggleForm = () => setFormVisible(!isFormVisible);
  const toggleLogin = () => setLoginVisible(!isLoginVisible);

  const isAdminPage = location.pathname.startsWith("/admin-panel");

  return (
    <>
      {!isAdminPage && <NavBar toggleForm={toggleForm} toggleLogin={toggleLogin} />}

      <Routes>
        <Route path="/" element={<Home toggleForm={toggleForm} />} />
        <Route path="/Academics" element={<Academics toggleForm={toggleForm} />} />
        <Route path="/admission" element={<Admission toggleForm={toggleForm} />} />
        <Route path="/Facilities" element={<FacilitiePage toggleForm={toggleForm} />} />
        <Route path="/CBSE" element={<CBSE toggleForm={toggleForm} />} />
        <Route path="/Committee" element={<CommitteePage toggleForm={toggleForm} />} />
        <Route path="/Download" element={<DownloadPage toggleForm={toggleForm} />} />
        <Route path="/gallery" element={<GalleryPage toggleForm={toggleForm} />} />
        <Route path="/contact-us" element={<ContactUs toggleForm={toggleForm} />} />
        <Route path="/About" element={<About toggleForm={toggleForm} />} />
        <Route path="/Careers" element={<CareersPage toggleForm={toggleForm} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
     {/* Other public routes */}
  <Route path="/login" element={<Login onLogin={() => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/admin-panel", { replace: true });
  }} />} />


  <Route element={<ProtectedRoute />}>
    <Route path="/admin-panel" element={<MainPageAdmin />} />
  </Route>

  {/* Redirect unknown routes to home */}
  <Route path="*" element={<Navigate to="/" />} />
  
  </Routes>

      {!isAdminPage && (
        <>
          <FooterTop toggleForm={toggleForm} />
          <Footer />
        </>
      )}

      {!isAdminPage && isModuleVisible && <Module closeModule={() => setModuleVisible(false)} />}

      {!isAdminPage && isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        !isAdminPage && <button onClick={toggleLogin}>Login</button>
      )}

      {isLoginVisible && !isAdminPage && (
        <div className="Login-overlay">
          <div className="Login-form-container">
            <Login onLogin={() => {
              setIsLoggedIn(true);
              setLoginVisible(false);
              navigate("/admin-panel");
            }} />
            <button className="Login-close-btn" onClick={toggleLogin}>Close</button>
          </div>
        </div>
      )}

      {isFormVisible && !isAdminPage && (
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







