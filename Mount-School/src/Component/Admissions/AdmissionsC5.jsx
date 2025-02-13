import React, { useEffect } from "react";
import "../../Styles/Admission-CSS/AdmissionC5.css";
import girlsImage from '../../image/Rectangle 23934.svg';
import useScrollToSection from "../Hook/CustomHook2";

const AdmissionProcess = () => {

 useScrollToSection();

  return (
    <div className="admission-containerC5">
       <div  id="Admission-section">
       <h2 className="Admission-h2TEXT">ADMISSION PROCESS</h2>
        <div className="admission-detailsC5">
        <div className="admission-text">
          <p>
            We warmly invite prospective parents and students to visit our
            school and experience our vibrant learning environment firsthand.
            School visits are conducted from Monday to Saturday
            between  9:00 AM to 2:00 PM. During the visit, you will have the
            opportunity to tour our campus, meet our dedicated faculty, and gain
            insights into our academic and extracurricular programs. To schedule
            a visit, please contact us prior. We look forward to welcoming you
            to our school community!.
          </p>
        </div>
        <div className="appointment-boxC5">
          <h3>BOOK YOUR TIMINGS FOR AN APPOINTMENT</h3>
          <p>Monday to Saturday: 9:00 AM to 2:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
       </div>
      </div>

      {/* Bottom Section */}
      <div className="admission-footerC5">
        <img
          src={girlsImage}
          alt="Students"
          className="admission-image"
        />
        <div className="admission-descriptionC5">
          <p>
            MLZS believes in the principle that a good liberal education is a
            participative process, in which the child is a key participant. In
            keeping with the spirit of this principle, we will interact with the
            child in combination with a written exercise. This will facilitate
            us in understanding the child’s readiness for the class to which you
            have applied. The Principal will meet the parent with the child and
            on his approval parents can proceed with the admission.
          </p>
          <button className="admission-enroll-button">ENROLL NOW</button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
