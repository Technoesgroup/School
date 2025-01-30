import '../../Styles/Academics-CSS/AcademicsC7.css'; // Styling file ka import
import AcademicC71 from '../../image/IndependentDay.svg';
import AcademicC72 from '../../image/s4.jpg';
import AcademicC73 from '../../image/Ind2.png';
import useScrollToSection from "../Hook/CustomHook2";

const AcademicsC7 = () => {
 
    useScrollToSection();
    
  return (
    <div className="AcademicsC7-events">
      <h2><strong>Events</strong></h2>
      <h3 className="AcademicsC7-event-title">Independence Day Celebrations, 15 Aug 2024</h3>
      <p className="AcademicsC7-event-description">
      Mount Litera Zee School celebrated Independence Day with immense enthusiasm and pride. Our students mesmerized everyone with a splendid cultural program, beautifully showcasing the diversity and richness of our nation through dance, music, and drama. It was a day filled with reverence, as we remembered the brave martyrs who sacrificed their lives for the freedom we cherish today.
     <br />Our Director and Principal shared heartfelt messages with the students, encouraging them to uphold the timeless values of freedom, unity, and integrity as they continue their journey in life.  <br />
     Let us all remain steadfast in honouring the legacy of our freedom fighters and work together to build a brighter future for our beloved nation
      </p>

      <div className="AcademicsC7-event-images">
        <img src={AcademicC71} alt="Students performing in rows" className="AcademicsC7-event-img" />
      </div>
      <div  className='AcademicsC7-lower-image-C7'>
      <img src={AcademicC72} alt="Group performance by students" className="AcademicsC7-event-img-lower  AcademicsC7-small-img-C7" />
      <img src={AcademicC73} alt="Students in NCC uniforms" className="AcademicsC7-event-img-lower  AcademicsC7-large-img-C7" />
      </div>
    </div>
  );
};

export default AcademicsC7;
