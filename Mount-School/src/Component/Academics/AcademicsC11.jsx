import "../../Styles/Academics-CSS/AcademicsC11.css";
import image1 from '../../image/WhatsApp Image 2024-02-12 at 8.35.42 AM.jpeg.jpg';
import image2 from '../../image/Image.png';
import image3 from '../../image/20240210_142537.jpg';
import image4 from '../../image/20240210_111921.jpg';
import image5 from '../../image/20240210_133204.jpg';
import useScrollToSection from "../Hook/CustomHook2";

const Sports = () => {
     
  useScrollToSection();
  
  return (
    <div className="AcademicsC11-halloween-event">
      {/* Header Section */}
      <header className="Academics-event-header">
        <h1>Annual Sports Day, 09 Feb 2024</h1>
      </header>

      {/* Description Section */}
      <section className="AcademicsC11-event-description">
        <p>
        The Annual Sports Day 2024 as a grand display of athleticism and team spirit. Students participated in a range of competitive events, from track races to 
        field games, showcasing their physical endurance and determination. The event was filled with energy and enthusiasm, with students cheering each other on, 
        making it a day to remember for both participants and spectators alike.
        </p>
      </section>

  <section className="AcademicsC11-event-gallery">
  <div className="AcademicsC11-gallery-first-row">
    <img className="AcademicsC11-small-Halloween-img" src={image1} alt="Left smaller image" />
    <img className="AcademicsC11-large-Halloween-img" src={image2} alt="Right larger image" />
  </div>
  <div className="AcademicsC11-gallery-row">
    <img className="AcademicsC11-equal-Halloween-img" src={image3} alt="Bottom image 1" />
    <img className="AcademicsC11-equal-Halloween-img" src={image4} alt="Bottom image 2" />
    <img className="AcademicsC11-equal-Halloween-img none" src={image5} alt="Bottom image 3" />
  </div>
</section>


    </div>
  );
};

export default Sports;