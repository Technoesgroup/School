import React, { useEffect } from 'react';
import '../../Styles/Admission-CSS/AdmissionC3.css';
import { useLocation } from 'react-router-dom';

const AdmissionC3 = () => {

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

   
  const ageCriteria = [
    { className: 'Nursery', age: '2+ Years' },
    { className: 'Jr KG', age: '3 Years' },
    { className: 'Sr KG', age: '4 Years' },
    { className: 'I', age: '5 Years' },
    { className: 'II', age: '6 Years' },
    { className: 'III', age: '7 Years' },
    { className: 'IV', age: '8 Years' },
    { className: 'V', age: '9 Years' },
    { className: 'VI', age: '10 Years' },
    { className: 'VII', age: '11 Years' },
    { className: 'VIII', age: '12 Years' },
    { className: 'IX', age: '13 Years' },
    { className: 'X', age: '14 Years' },
  ];



  return (
    <div className="admission-container">
      {/* Add the ID here to enable scrolling */}
      <div id="Overview-section">
        <h2 className="admission-title">
          <strong className="highlights">ADMISSION</strong> OVERVIEW
        </h2>
        <div className="age-criteria">
          <h3>Age Criteria for Admission</h3>
          <p>
            As per rules promulgated by the CBSE, the Board Examinations (Secondary level) shall
            be open to students who have reached the age of 14 years as on 1st April of the year
            in which they have taken examination.
          </p>

          <table className="age-table">
            <thead>
              <tr>
                <th>Class</th>
                <th>Minimum age on 31st March of the year in which admission is sought</th>
              </tr>
            </thead>
            <tbody>
              {ageCriteria.map((item, index) => (
                <tr key={index}>
                  <td>{item.className}</td>
                  <td>{item.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="entry-criteria">
        <h3>Entry Criteria for Admission</h3>
        <ul>
          <li>Admission will be arranged for students on the basis of interaction assessment.</li>
          <li>Observation and viva will be conducted in person.</li>
          <li>
            Students for Mount Litera Zee School will not have any entrance test or assessment
            in case of internal transfers.
          </li>
          <li>No Admission test will be held till Class II.</li>
        </ul>
      </div>
    </div>
  );
};

export default AdmissionC3;
