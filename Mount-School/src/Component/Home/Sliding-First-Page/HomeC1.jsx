import React from "react";
import Slider from "react-slick";
import '../../../Styles/Home-CSS/Sliding-Page-CSS/HomeC1.css';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import heroImg1 from '../../../image/s6.jpg';
import heroImg2 from '../../../image/s1.jpg';
import heroImg3 from '../../../image/s2.jpg';
import heroImg4 from '../../../image/s3.jpg';
import heroImg5 from '../../../image/s4.jpg';

function HomeC1() {

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 400, // Animation speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto-play the slides
    autoplaySpeed: 2000, // Auto-play speed (3 seconds)
    rtl: true, // Enable right-to-left sliding
    arrows: false, // Hide navigation arrows
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
        <div className="hero-contents">
          <h1>
            Mount Litera Zee School
            <br />
            <span className="change-col">Bihta</span>
          </h1>
          <button className="front-button">
            <span className="Admission-text-size">
              ADMISSIONS
            </span>
          </button>
        </div>
        <Slider {...settings} className="hero-slider">
          <div>
            <div className="hero-img-wrapper">
              <img src={heroImg1} alt="Slide 1" className="hero-img" />
              <div className="hero-img"></div>
            </div>
          </div>
          <div>
            <div className="hero-img-wrapper">
              <img src={heroImg2} alt="Slide 2" className="hero-img" />
              <div className="hero-img"></div>
            </div>
          </div>
          <div>
            <div className="hero-img-wrapper">
              <img src={heroImg3} alt="Slide 3" className="hero-img" />
              <div className="hero-img"></div>
            </div>
          </div>
          <div>
            <div className="hero-img-wrapper">
              <img src={heroImg4} alt="Slide 4" className="hero-img" />
              <div className="hero-img"></div>
            </div>
          </div>
          <div>
            <div className="hero-img-wrapper">
              <img src={heroImg5} alt="Slide 5" className="hero-img" />
              <div className="hero-img"></div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default HomeC1;


