import "../../Styles/Academics-CSS/AcademicsC5.css";
import image1 from "../../image/1B7A5369.jpg";
import image2 from "../../image/IMG-20240522-WA0064.jpg";
import image3 from "../../image/332651516_1267840104082038_69494475655152421_n.jpg";
import image4 from '../../image/s2.jpg';
import useScrollToSection from "../Hook/CustomHook2";

const AcademicsC5 = () => {
          useScrollToSection();
  return (
    <div className="AcadC5-container">
     <div className="inner-Container-C5">
     <div>
     <div className="upper-images-C5">
        <img src={image1} alt="Image1" className="upper-image-C5" />
        <img src={image2} alt="Image2" className="upper-image-C5  upper-image-2" />
      </div>
      <div className="lower-images-C5">
        <img src={image3} alt="Image3" className="lower-image-C5 small-C5" />
        <img src={image4} alt="Image4" className="lower-image-C5 large-C5" />
      </div>
     </div>
      <div className="AcadC5-content">
        <h2  className="Academic-titleC5">MIDDLE YEARS</h2>
        <p>
        In the Middle Years (grades 6 to 8), students engage in an enriched learning environment
         where educators collaborate closely with them, fostering continuous skill development and knowledge deepening.
          Our approach emphasizes differentiation, providing open spaces for exploration and learning from mistakes, ensuring 
          students excel not only academically but also in diverse co-scholastic pursuits.
         Extracurricular activities, including sports, arts, and student councils, 
         allow students to explore interests and develop leadership skills. 
        </p>
       
      </div>
     </div>
    </div>
  );
};

export default AcademicsC5;