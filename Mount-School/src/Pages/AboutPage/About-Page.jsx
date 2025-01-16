import React from 'react'
import '../AboutPage/About-Page.css'
import Comp1 from '../../Component/About/AboutC1';
import Comp2 from '../../Component/About/AboutC2';
import Comp3 from '../../Component/About/AboutC3';
import Comp4 from '../../Component/About/AboutC4';
import Comp5 from '../../Component/About/AboutC5';
import Com7 from '../../Component/About/About_Management/AboutC7';
import Com9 from '../../Component/About/About_Our_Gallery/AboutC9';


function Academics() {
  return (
    <div className="folder-page">
    <div className="About-content">
      <Comp1 />
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <Comp5 />
      <Com7 />
      <Com9 />
   
    </div>
  </div>
  )
}

export default Academics;