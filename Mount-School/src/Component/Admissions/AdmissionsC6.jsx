import "../../Styles/Admission-CSS/AdmissionC6.css"; 
import useScrollToSection from "../Hook/CustomHook2"; 
import pdf1 from "../../image/Fee Structure All class 2025-26 wih SEP Fee[1].pdf"; 

const CourseFee = () => {     
  useScrollToSection();    

  return (     
    <div className="course-fee-container">     
      <div id="Course&Fee-section">     
        <h1 className="course-fee-title">
          COURSE <span className="highlight">&</span> FEE       
        </h1>       
        <p className="course-fee-description">         
          At MLZS, we offer a diverse range of courses designed to nurture academic excellence and holistic development.
        </p>       
        <p className="course-fee-instructions">         
          To learn more about the detailed course offerings and fee breakdown, please click the button below to download the comprehensive PDF document. 
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

      {/* Correct PDF Download Link */}
      <a href={pdf1} className="download-link" download>       
        <div className="DownloadC4-button-container">       
          <span className="DownloadC4-button-text">Download Course & Fee Structure PDF</span>       
          <button className="DownloadC4-download-button">Download</button>     
        </div>       
      </a>     
    </div>   
  ); 
};  

export default CourseFee;

