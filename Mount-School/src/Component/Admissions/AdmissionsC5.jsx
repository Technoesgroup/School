import React, { useEffect } from "react";
import "../../Styles/Admission-CSS/AdmissionC5.css";
import girlsImage from '../../image/children_pic.svg';
import { useLocation } from "react-router-dom";

const AdmissionProcess = () => {

  const location = useLocation();

  useEffect(() => {
     if (location.hash) {
       const id = location.hash.replace('#', ''); // Remove the # from hash
       const element = document.getElementById(id); // Find the element by ID
       if (element) {
         element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the element
       }
     }
   }, [location]);

  return (
    <div className="admission-containerC5">
       <div  id="Admission-section">
       <h2 className="Admission-h2TEXT"><span className="highlists">ADMISSION</span> PROCESS</h2>
        <div className="admission-detailsC5">
        <div className="admission-text">
          <p>
            We warmly invite prospective parents and students to visit our
            school and experience our vibrant learning environment firsthand.
            School visits are conducted from Monday to Friday and on Saturday
            between 9:00 am to 11:30 am. During the visit, you will have the
            opportunity to tour our campus, meet our dedicated faculty, and gain
            insights into our academic and extracurricular programs. To schedule
            a visit, please contact us prior. We look forward to welcoming you
            to our school community!.
          </p>
        </div>
        <div className="appointment-boxC5">
          <h3>BOOK YOUR TIMINGS FOR AN APPOINTMENT</h3>
          <p>MONDAY TO FRIDAY: 9:00 AM TO 3:00 PM</p>
          <p>SATURDAY: 9:00 AM TO 11:30 AM</p>
          <p>SUNDAY: CLOSED</p>
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
