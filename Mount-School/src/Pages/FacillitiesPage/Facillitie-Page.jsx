import React from 'react'
import '../FacillitiesPage/Facillities-Page.css';
import Comp1 from '../../Component/Facillities/FacillitiesC1';
import Comp2 from '../../Component/Facillities/FacillitiesC2';
import Comp3 from '../../Component/Facillities/LabPage';


function FacilitiePage() {
  return (
    <div className="folder-page">
    <div className="Facillitie-content">
      <Comp1 /> 
      <Comp2 />
      <Comp3 />
    </div>
  </div>
  )
}

export default FacilitiePage;