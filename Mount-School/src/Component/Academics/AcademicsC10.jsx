import React from 'react';
import '../../Styles/Academics-CSS/AcademicsC10.css'; // Importing CSS for styling
import Activity_Image  from '../../image/1B7A4945.jpg'

const CoCurricular = () => {
  return (
    <div className="AcademicsC10-co-curricular-container">
      <h2 className="AcademicsC10-header">CO-CURRICULAR  ACTIVITIES</h2>
      <div className="AcademicsC10-content">
        <div className="AcademicsC10-text-section">
          <p>
          School activities play a significant part in the development of students. Co-curricular activities have become the fundamental part of school life and aid to improve students learning at school. These activities are mandatory & necessary for every student to participate. Co-curricular are structured and balanced with the scholastic educational/ academic curriculum so that every student gets the opportunity to learn beyond studies. Co-curricular activities are intended to bring social & intellectual skills, moral, cultural & ethical values, personality development, and character advancement in students & include athletics, social occasions, Library activities, science lab activities, classroom activities, creative arts, meditation, and so on.
          </p>
        </div>
        <div className="AcademicsC10-image-section">
          <img 
            loading="lazy"
            src={Activity_Image} 
            alt="Co-Curricular Activities" 
            className="AcademicsC10-activity-image"
          />
        </div>
      </div>
    </div>
  );
};

export default CoCurricular;
