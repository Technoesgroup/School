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