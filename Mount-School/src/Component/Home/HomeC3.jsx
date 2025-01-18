import React from 'react';
import '../../Styles/Home-CSS/HomeC3.css';
import videoCampus from '../../image/School_Video.mp4';

const HomeC3 = () => {
  return (
    <div className="Home3-container-Big">
      {/* Left Side - Campus Tour */}
      <div className="left-section_3">
        <video className="campus-video" muted autoPlay loop>
          <source src={videoCampus} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="campus-text">
          <h1>Campus Tour</h1>
        </div>
      </div>

      {/* Right Side - News and Updates */}
      <div className="right-section_3">
        <h2 className="Home3-news-title_up">LATEST NEWS AND UPDATES</h2>
        <ul className="news-listss">
          <li>Event Echoes</li>
          <li>ATL School of the  Month</li>
          <li>Annual Sports Meet</li>
          <li>Diwali 2K24</li>
          <li>PTM (yearly Assessment)</li>
          <li>Independence Day 2024</li>
          <li>Annual Sports Meet</li>
          <li>Republic Day</li>
           <li>26 January</li>
          <li>15 August 1947</li>
          <li>Diwali 2K24</li>
          <li>PTM (yearly Assessment)</li>
          <li>Independence Day 2024</li>
          <li>Annual Sports Meet</li>
        </ul>
        <button className="Home3-view-all-btn">View All</button>
      </div>
    </div>
  );
};

export default HomeC3;

