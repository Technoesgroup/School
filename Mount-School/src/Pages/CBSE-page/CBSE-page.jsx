import React from 'react'
import '../CBSE-page/CBSE-page.css';
import Comp1 from '../../Component/CBSE/CBSEC1';
import Comp2 from '../../Component/CBSE/CBSEC2';
import Comp3 from  '../../Component/CBSE/CBSEC3';




function CBSE() {
  return (
    <div className="folder-page">
    <div className="CBSE-content">
      <Comp1 /> 
      <Comp2 />
      <Comp3 />
    </div>
  </div>
  )
}

export default CBSE;