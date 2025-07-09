import "../../Styles/Academics-CSS/AcademicsC6.css";
import image1 from "../../image/Rectangle 23816.png";
import image2 from "../../image/398656726_799334345538648_1497034543001386452_n.jpg";
import image3 from "../../image/Rectangle 23817.png";
import image4 from '../../image/393728330_791349343003815_5609259183610318279_n.jpg';
import useScrollToSection from "../Hook/CustomHook2";

const AcademicsC6 = () => {
      useScrollToSection();
  return (
    <div className="AcadC6-container">
     <div className="inner-Container-C6">
     <div>
     <div className="upper-images-C6">
        <img   loading="lazy" src={image1} alt="Image1" className="upper-image-C6" />
        <img   loading="lazy" src={image2} alt="Image2" className="upper-image-C6" />
      </div>
      <div className="lower-images-C6">
        <img   loading="lazy" src={image3} alt="Image3" className="lower-image-C6 small-C6" />
        <img   loading="lazy" src={image4} alt="Image4" className="lower-image-C6 large-C6" />
      </div>
     </div>
      <div className="AcadC6-content">
        <h2  className="Academic-titleC6">SECONDARY / SR. SECONDARY YEARS 
        (Grade IX - Grade XII)</h2>
        <p  id="Activities-section">
        Believing in education aligned with principles of growth, our approach focuses on fostering personal growth through meaningful experiences. In senior grades, rigorous research ensures engaging and profound learning experiences, inspiring students to question, investigate, and innovate beyond textbooks. Our STEAM programs and career awareness initiatives empower them to explore, create, and embrace diverse opportunities, while socio-emotional learning encourages reflection, identity awareness, and the development of individual belief systems. The challenges they face include increased academic pressure, peer influence, and decisions about their future paths. 
        </p>
       
      </div>
     </div>
    </div>
  );
};

export default AcademicsC6;