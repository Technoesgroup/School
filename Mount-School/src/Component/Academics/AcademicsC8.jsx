import React, { useEffect } from "react";
import "../../Styles/Academics-CSS/AcademicsC8.css";
import image1 from '../../image/20231031_103916.jpg';
import image2 from '../../image/20231031_103932.jpg';
import image3 from '../../image/20231031_103843.jpg';
import image4 from '../../image/20231031_103847.jpg';
import image5 from '../../image/20231031_103811.jpg';
import { useLocation } from "react-router-dom";

const HalloweenEvent = () => {
  const location = useLocation();

  useEffect(() => {
     if (location.hash) {
       const id = location.hash.replace('#', ''); // Remove the # from hash
       const element = document.getElementById(id); // Find the element by ID
       if (element) {
         element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the element
       }
     }
   }, [location]);
  return (
    <div className="halloween-event">
      {/* Header Section */}
      <header className="event-header">
        <h1>Halloween Day, 31 Oct 2024</h1>
      </header>

      {/* Description Section */}
      <section className="event-description">
        <p>
          Halloween Day at Mount Litera Zee School (MLZS) is celebrated as an
          exciting and creative event, blending fun, learning, and festive vibes. 
          The school transforms into a spooky wonderland with cobwebs, pumpkins, and 
          themed decorations, creating an immersive experience for students.
        </p>
        <p>
          Activities include a lively costume parade where students showcase 
          their spooky and imaginative attire, storytelling sessions with kid-friendly 
          ghost tales, and engaging games such as treasure hunts and pumpkin carving contests. 
          Workshops on Halloween crafts and performances like themed skits or dances add to 
          the entertainment, while Halloween-inspired snacks ensure a delightful culinary 
          experience. Alongside the fun, educational sessions about the history and traditions 
          of Halloween provide a meaningful learning opportunity. The event promotes creativity, 
          collaboration, and cultural awareness, making it a memorable occasion for all participants.
        </p>
      </section>

      {/* Image Gallery Section */}
      <section className="event-gallery">
        <div className="gallery-first-row">
          <img  className="small-Halloween-img"   src={image1} alt="Halloween costume parade " />
          <img  className="large-Halloween-img" src={image2} alt="Students in costumes  large-Halloween-img " />
        </div>
        <div className="gallery-row">
          <img src={image3} alt="Halloween kid's performance" />
          <img src={image4} alt="Scary costumes showcase" />
        </div>
        <div className="gallery-row">
          <img  className="none" src={image5} alt="Creative Halloween makeup" />
        </div>
      </section>
    </div>
  );
};

export default HalloweenEvent;
