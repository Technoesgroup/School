import React from "react";
import GalleryC1 from '../../image/toppic2.jpg';
import '../../Styles/Gallery-CSS/GalleryC1.css';

function GalleryC(){
    return(
        <div className="Gallery-container_2">
        <img src={GalleryC1} alt="Hero" className="hero-img_Gallery" />
      </div>
    )
}

export default GalleryC;