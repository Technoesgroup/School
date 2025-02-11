import React, { useEffect } from 'react';
import '../../Styles/Admission-CSS/AdmissionC3.css';
import useScrollToSection from "../Hook/CustomHook2";

const AdmissionC3 = () => {

  const ageData = [
    { class: "Nursery", dob: "01-04-2021 to 31-03-2022", age: "If the child is 3+", date: "31st March 2025" },
    { class: "Jr. Kg.", dob: "01-04-2020 to 31-03-2021", age: "If the child is 4+", date: "31st March 2025" },
    { class: "Sr. Kg.", dob: "01-04-2019 to 31-03-2020", age: "If the child is 5+", date: "31st March 2025" },
    { class: "Class I", dob: "01-04-2018 to 31-03-2019", age: "If the child is 6+", date: "31st March 2025" },
    { class: "Class II", dob: "01-04-2017 to 31-03-2018", age: "If the child is 7+", date: "31st March 2025" },
    { class: "Class III", dob: "01-04-2016 to 31-03-2017", age: "If the child is 8+", date: "31st March 2025" },
    { class: "Class IV", dob: "01-04-2015 to 31-03-2016", age: "If the child is 9+", date: "31st March 2025" },
    { class: "Class V", dob: "01-04-2014 to 31-03-2015", age: "If the child is 10+", date: "31st March 2025" },
    { class: "Class VI", dob: "01-04-2013 to 31-03-2014", age: "If the child is 11+", date: "31st March 2025" },
    { class: "Class VII", dob: "01-04-2012 to 31-03-2013", age: "If the child is 12+", date: "31st March 2025" },
    { class: "Class VIII", dob: "01-04-2011 to 31-03-2012", age: "If the child is 13+", date: "31st March 2025" },
    { class: "Class IX", dob: "01-04-2010 to 31-03-2011", age: "If the child is 14+", date: "31st March 2025" },
    { class: "Class X", dob: "01-04-2009 to 31-03-2010", age: "If the child is 15+", date: "31st March 2025" },
    { class: "Class XI", dob: "01-04-2008 to 31-03-2009", age: "If the child is 16+", date: "31st March 2025" },
    { class: "Class XII", dob: "01-04-2007 to 31-03-2008", age: "If the child is 17+", date: "31st March 2025" },
  ];
  

useScrollToSection();

   

  return (
    <div id="Overview-section" className="admission-container">
      <div>
        <h2 className="admission-title">
          ADMISSION  OVERVIEW
        </h2>
        <div className="AdmissionsC3-age-criteria">
          <h3>Age Criteria for Admission</h3>
          <p>
            As per rules promulgated by the CBSE, the Board Examinations (Secondary level) shall
            be open to students who have reached the age of 14 years as on 1st April of the year
            in which they have taken examination.
          </p>
        </div>
      </div>
       
      <div className="age-table-container">
      <table className="age-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Date of Birth Between</th>
            <th>Age</th>
            <th>Date as on</th>
          </tr>
        </thead>
        <tbody>
          {ageData.map((row, index) => (
            <tr key={index}>
              <td>{row.class}</td>
              <td>{row.dob}</td>
              <td>{row.age}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
      <div className="AdmissionC3-entry-criteria">
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
