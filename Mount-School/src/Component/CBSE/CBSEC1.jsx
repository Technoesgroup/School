import React from "react";
import CBSEC1 from '../../image/1B7A5232.jpg';
import '../../Styles/CBSE-CSS/CBSEC1.css';

function cbsec(){
    return(
        <div className="CBSE-container_2">
        <img   loading="lazy" src={CBSEC1} alt="Hero" className="hero-img_CBSE" />
      </div>
    )
}

export default cbsec;