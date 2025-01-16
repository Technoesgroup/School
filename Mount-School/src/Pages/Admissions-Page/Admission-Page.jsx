import React from 'react'
import '../Admissions-Page/Admission-Page.css';
import Comp1 from '../../Component/Admissions/AdmissionsC1';
import Comp2 from '../../Component/Admissions/AdmissionsC2';
import Comp3 from  '../../Component/Admissions/AdmissionsC3';
import Comp4 from '../../Component/Admissions/AdmissionsC4';
import Comp5 from '../../Component/Admissions/AdmissionsC5';
import Comp6 from '../../Component/Admissions/AdmissionsC6';



function Admission() {
  return (
    <div className="folder-page">
    <div className="Admission-content">
      <Comp1 /> 
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <Comp5 />
      <Comp6 />
    </div>
  </div>
  )
}

export default Admission;