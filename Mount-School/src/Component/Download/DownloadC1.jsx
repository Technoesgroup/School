import React from "react";
import DownloadC1 from '../../image/393697766_791349383003811_2584252641419563477_n.jpg';
import '../../Styles/Download-CSS/DownloadC1.css';

function DownloadC(){
    return(
        <div className="Download-container_2">
        <img   loading="lazy" src={DownloadC1} alt="Hero" className="hero-img_2" />
      </div>
    )
}

export default DownloadC;