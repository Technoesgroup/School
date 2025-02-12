import "../../Styles/Academics-CSS/AcademicsC4.css";
import image1 from "../../image/WhatsApp Image 2025-02-12 at 16.03.34_1d2af211.jpg";
import image2 from "../../image/1B7A5541.jpg";
import image3 from "../../image/Frame12.jpg";
import image4 from '../../image/400493600_805418674930215_5780913748664188151_n.jpg';
import useScrollToSection from "../Hook/CustomHook2";

const AcademicsC4 = () => {

     useScrollToSection();

  return (
    <div className="AcadeC4-container">
   <div className="inner-Container-C4">
   <div>
     <div className="upper-images-C4">
        <img src={image1} alt="Image1" className="upper-image-C4" />
        {/* <img src={image2} alt="Image2" className="upper-image-C4" /> */}
      </div>
      <div className="lower-images-C4">
        <img src={image3} alt="Image3" className="lower-image-C4 small-C4" />
        <img src={image4} alt="Image4" className="lower-image-C4 large-C4" />
      </div>
     </div>
      <div className="AcadeC4-content">
        <h2  className="Academic-titleC4">PREPARATORY YEARS (Grade III - Grade V)</h2>
        <p>
        Our pedagogical focus is on instilling the love for learning and the 
        importance of focus and discipline. Through an integrated approach encompassing all 
        the seven domains we build intellectual ability, emotional intelligence, socio-emotional skills,
         and physical well-being. Deliberately stretching their ability to concentrate, we aim to cultivate
          a joy for learning, preparing them for the demands of higher grades. Our approach involves immersive 
          experiences, state-of-the-art STEM labs, 
        coding exercises, and blended learning to nurture individual talents and collaborative learning journeys.
        </p>
        {/* <p>
          Deliberately stretching their ability to concentrate, we aim to
          cultivate a joy for learning, preparing them for the demands of
          higher grades. Our approach involves immersive experiences,
          state-of-the-art STEM labs, coding exercises, and blended learning
          to nurture individual talents and collaborative learning journeys.
        </p> */}
      </div>
   </div>
    </div>
  );
};

export default AcademicsC4;
