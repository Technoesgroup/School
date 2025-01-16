import React from 'react'
import '../Download-Page/Download-Page.css';
import Comp1 from '../../Component/Download/DownloadC1';
import Comp2 from '../../Component/Download/DownloadC2';
import Comp3 from  '../../Component/Download/DownloadC3';




function DownloadPage() {
  return (
    <div className="folder-page">
    <div className="Download-content">
      <Comp1 /> 
      <Comp2 />
      <Comp3 />
    </div>
  </div>
  )
}

export default DownloadPage;