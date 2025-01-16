import React from 'react'
import '../Committe-Page/Committie-Page.css';
import Comp1 from '../../Component/Committe/CommitteC1';
import Comp2 from '../../Component/Committe/CommitteC2';
import Comp3 from  '../../Component/Committe/CommitteC3';




function CommitteePage() {
  return (
    <div className="folder-page">
    <div className="Committe-content">
      <Comp1 /> 
      <Comp2 />
      <Comp3 />
    </div>
  </div>
  )
}

export default CommitteePage;