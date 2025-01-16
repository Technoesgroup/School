import React from 'react'
import '../Academics/Academics-Page.css'
import Comp1 from '../../Component/Academics/AcademicsC1';
import Comp2 from '../../Component/Academics/AcademicsC2';
import Comp3 from '../../Component/Academics/AcademicsC3';
import Comp4 from '../../Component/Academics/AcademicsC4';
import Comp5 from '../../Component/Academics/AcademicsC5';
import Comp6 from '../../Component/Academics/AcademicsC6';
import Comp7 from '../../Component/Academics/AcademicsC7';
import Comp8 from '../../Component/Academics/AcademicsC8';

function Academics() {
  return (
    <div className="folder-page">
    <div className="Academics-page">
      <Comp1 />
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <Comp5 />
      <Comp6 />
      <Comp7 />
      <Comp8 />
      </div>
  </div>
  )
}

export default Academics;