import "../../Styles/Academics-CSS/AcademicsC3.css";
import Acitvity1 from  '../../image/IMG20241009115034.jpg';     
import Acitvity2 from  '../../image/304783286_3341234766202615_9176711875652758687_n.jpg';                     
import Acitvity3 from  '../../image/Rectangle 23814.png'; 
import Acitvity4 from  '../../image/IMG-20241029-WA0056.jpg'; 
import useScrollToSection from "../Hook/CustomHook2";

const AcademicsC3 = () => {

useScrollToSection();  

  return (
    <div  id="Learning-section" className="learning-pathways-container">
      <h2  className="Learning-path-h1">
       LEARNING
       PATHWAYS
      </h2>
      <p className="Academics-description">
      At Mount Litera Zee School,Bihta, every student gets a personalized Learning Pathway, covering intellectual, physical, social, and emotional aspects through one of four designated pathways.
      </p>
      <div className="Academics-content-container">
        <div className="Academics-text-section">
          <h3>Foundational Years (Nursery - Grade II)</h3>
          <p>
          Mount Litera Zee School, Bihta,  takes a comprehensive educational approach, addressing each child's distinct developmental needs. In the Foundational years setting, we emphasize four essential learning domains.
          </p>
          <ul className="learning-domains">
            <li>
              <span className="icon">😊</span> LEARNING FORMS OF EXPRESSION
            </li>
            <li>
              <span className="icon">🌎</span> EXPLORING AND INTERACTING WITH THE
              WORLD AROUND US
            </li>
            <li>
              <span className="icon">📖</span> UNDERSTANDING THE WORLD WE LIVE
              IN
            </li>
            <li>
              <span className="icon">🏃</span> PRACTICING A HEALTHY WAY OF LIVING
            </li>
          </ul>
        </div>
        <div className="Academic-image-section">
          <img  loading="lazy" src={Acitvity1} alt="Activity 1" />
          <img  loading="lazy" src={Acitvity2} alt="Activity 2" />
          <img  loading="lazy" src={Acitvity3} alt="Activity 3" />
          <img  loading="lazy" src={Acitvity4} alt="Activity 4" />
        </div>
      </div>
    </div>
  );
};

export default AcademicsC3;
