import React from 'react'
import '../GalleryPage/GalleryPage.css';
import Comp1 from '../../Component/Gallery/GalleryC1';
import Comp2 from '../../Component/Gallery/GalleryC2';
import Comp3 from  '../../Component/Gallery/GalleryC3';
import Comp4 from  '../../Component/Gallery/GalleryC4';




function GalleryPage() {
  return (
    <div className="folder-page">
    <div className="Gallery-content">
      <Comp1 /> 
      <Comp2 />
      <Comp3 />
      <Comp4 />
    </div>
  </div>
  )
}

export default GalleryPage;