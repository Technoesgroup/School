import React, { useEffect } from 'react';
import '../../Styles/Academics-CSS/AcademicsC7.css'; // Styling file ka import
import AcademicC71 from '../../image/IMG_20240726_195817.jpg';
import AcademicC72 from '../../image/s4.jpg';
import AcademicC73 from '../../image/s5.jpg';
import { useLocation } from 'react-router-dom';

const AcademicsC7 = () => {
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
    <div className="events">
      <h2><strong>Events</strong></h2>
      <h3 className="event-title">Independence Day Celebrations, 15 Aug 2024</h3>
      <p className="event-description">
        Mount Litera Zee School celebrated Independence Day with great enthusiasm and pride. 
        Our students captivated everyone with a beautiful cultural program, showcasing the 
        diversity and richness of our nation through dance, music, and drama. It was a day 
        to remember the brave martyrs who sacrificed their lives for our freedom. Our Director 
        and Principal shared heartfelt messages with the students, encouraging them to uphold 
        the values of freedom, unity, and integrity as they move forward in life. Let us all 
        continue to honor the legacy of our freedom fighters and work together to build a 
        better future for our nation!
      </p>

      <div className="event-images">
        <img src={AcademicC71} alt="Students performing in rows" className="event-img" />
      </div>
      <div  className='lower-image-C7'>
      <img src={AcademicC72} alt="Group performance by students" className="event-img-lower  small-img-C7" />
      <img src={AcademicC73} alt="Students in NCC uniforms" className="event-img-lower  large-img-C7" />
      </div>
    </div>
  );
};

export default AcademicsC7;
