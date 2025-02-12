import "../../Styles/Admission-CSS/AdmissionC6.css"; // Separate CSS file for styling
import useScrollToSection from "../Hook/CustomHook2";
const CourseFee = () => {
  
  useScrollToSection();

  return (
    <div className="course-fee-container">
    <div id="Course&Fee-section">
    <h1 className="course-fee-title">
        COURSE <span className="highlight">&</span> FEE
      </h1>
      <p className="course-fee-description">
        At MLZS, we offer a diverse range of courses designed to nurture academic excellence and holistic development. Our fee structure is transparent and inclusive, ensuring access to quality education for all.
      </p>
      <p className="course-fee-instructions">
        To learn more about the detailed course offerings and fee breakdown, please click the button below to download the comprehensive PDF document. This document includes:
      </p>
      <ul className="fee-list">
        <li>Registration Fee</li>
        <li>Processing Fee</li>
        <li>Annual Fee</li>
        <li>Tuition Fee</li>
        <li>SEP Fee</li>
      </ul>
      <p className="additional-info">
        Stay informed and plan your journey with us effectively. For further assistance, feel free to contact our admissions team.
      </p>
    </div>
    <a href="/path-to-pdf" className="download-link" download>
      <div className="DownloadC4-button-container">
      <span className="DownloadC4-button-text">Download Course & Fee Structure PDF</span>
      <button className="DownloadC4-download-button">Download</button>
    </div>
      </a>
    </div>
  );
};

export default CourseFee;
