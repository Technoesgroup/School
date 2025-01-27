import "../../Styles/Academics-CSS/AcademicsC8.css";
import image1 from '../../image/20231031_103916.jpg';
import image2 from '../../image/20231031_103932.jpg';
import image3 from '../../image/20231031_103843.jpg';
import image4 from '../../image/20231031_103847.jpg';
import image5 from '../../image/20231031_103811.jpg';
import useScrollToSection from "../Hook/CustomHook2";

const HalloweenEvent = () => {
     
  useScrollToSection();
  
  return (
    <div className="Academics-halloween-event">
      {/* Header Section */}
      <header className="Academics-event-header">
        <h1>Halloween Day, 31 Oct 2024</h1>
      </header>

      {/* Description Section */}
      <section className="Academics-event-description">
        <p>
        Mount Litera Zee School Bihta turned into a spooky wonderland on Halloween Day 2024.
         The students arrived in creative costumes ranging from spooky ghosts to whimsical creatures,
          adding to the fun and excitement of the day. With themed games, decorations, and a costume
           parade, the event was a thrilling mix of fun, fright, and laughter, making it a memorable 
           celebration for all.
        </p>
      </section>

  <section className="Academics-event-gallery">
  <div className="Academics-gallery-first-row">
    <img className="Academics-small-Halloween-img" src={image1} alt="Left smaller image" />
    <img className="Academics-large-Halloween-img" src={image2} alt="Right larger image" />
  </div>
  <div className="Academics-gallery-row">
    <img className="Academics-equal-Halloween-img" src={image3} alt="Bottom image 1" />
    <img className="Academics-equal-Halloween-img" src={image4} alt="Bottom image 2" />
    <img className="Academics-equal-Halloween-img none" src={image5} alt="Bottom image 3" />
  </div>
</section>


    </div>
  );
};

export default HalloweenEvent;