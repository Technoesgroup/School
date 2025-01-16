import React from "react";
import Slider from "react-slick";
import '../../../Styles/Home-CSS/Sliding-Page-CSS/HomeC1.css';
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";

import heroImg1 from '../../../image/s6.jpg';
import heroImg2 from '../../../image/s1.jpg';
import heroImg3 from '../../../image/s2.jpg';
import heroImg4 from '../../../image/s3.jpg';
import heroImg5 from '../../../image/s4.jpg';
import { CustomNextArrow, CustomPrevArrow } from "./Sliding_Left_Right";

function HomeC1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 850,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Automatically slides
    autoplaySpeed: 2000, // 3 seconds delay
    nextArrow: <CustomNextArrow />, // Assign custom next arrow
    prevArrow: <CustomPrevArrow />, // Assign custom previous arrow
  };

  return (
    <>
    <div className="header-banner">
        <div className="scroll-wrapper">
          <p>Welcome To Mount Litera Zee School, Bihta</p>
          <p>Admission Open Now For Year 2025 to 2026</p>
          <p>Welcome To Mount Litera Zee School, Bihta</p>
        </div>
      </div>
    <div className="Home-container-box">
      <div className="content">
        <h1>
           Mount Litera Zee School
           <br>
           </br>
          <span className="change-col">Bihta</span>
        </h1>
        <button className="front-button">
          <span className="text-size">
            Admission
          </span>
        </button>
      </div>
      <Slider {...settings} className="hero-slider">
        <div>
          <img src={heroImg1} alt="Slide 1" className="hero-img" />
        </div>
        <div>
          <img src={heroImg2} alt="Slide 2" className="hero-img" />
        </div>
        <div>
          <img src={heroImg3} alt="Slide 3" className="hero-img" />
        </div>
        <div>
          <img src={heroImg4} alt="Slide 4" className="hero-img" />
        </div>
        <div>
          <img src={heroImg5} alt="Slide 5" className="hero-img" />
        </div>
      </Slider>
    </div>
    </>
  );
}

export default HomeC1;

