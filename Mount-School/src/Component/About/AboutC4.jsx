import React, { useEffect } from "react";
import  Vision  from '../../image/Image.png';
import '../../Styles/About-CSS/AboutC4.css';
import useScrollToSection from "../Hook/CustomHook2";

function AboutC4(){

      useScrollToSection();

    return(
        <div id='Vision-section' className="bc-con">
        <div className="sc-con">
        <h1  className="text-C4-h1">
        <span className="black-text_C4">OUR</span> 
        <span className="blue-text_C4">  VISION</span>
        </h1>
       {/* <div className="lines_C4">
        <div className="line_C4 black-line_C4"></div>
        <div className="line_C4 red-line_C4"></div>
      </div> */}
        <p>
        Our vision is to foster a dynamic learning environment where students develop into compassionate, confident, and resilient individuals who excel in all aspects of life and contribute meaningfully to a rapidly changing world. 
        We are committed to providing a holistic education that nurtures intellectual curiosity, critical thinking, and creativity while instilling strong values of integrity, empathy, and respect for diversity. 
        Through an inclusive and supportive atmosphere, we strive to empower every student to reach their full potential—academically, socially, and emotionally.
        </p>
        </div>
        <div className="image">
          <img src={Vision} alt="Business Illustration" />
        </div>
      </div>
    )
    
}

export default AboutC4;