import  Vision  from '../../image/IMG_20240726_195817.jpg';
import '../../Styles/About-CSS/AboutC5.css';
import useScrollToSection from "../Hook/CustomHook2";

function AboutC5(){
         useScrollToSection();

    return(
        <div id="Mision-section" className="b-con">
        <div className="s-con">
        <h1  className="text_About_C5">
        <span className="black-text_C5">OUR</span> 
        <span className="blue-text_C5">  MISSION</span>
        </h1>
       {/* <div className="lines_C5">
        <div className="line_C5 black-line_C5"></div>
        <div className="line_C5 red-line_C5"></div>
      </div> */}
        <p>
        Our mission is to provide a holistic education that empowers students to become lifelong learners, critical thinkers, and compassionate leaders. We are dedicated to fostering intellectual curiosity and 
        creativity while ensuring academic excellence across all disciplines.
         Our school seeks to create a nurturing and inclusive environment where every student feels valued, respected, and inspired to reach their full potential. We aim to instill core values of integrity, empathy, and respect for cultural and individual diversity.
        </p>
        </div>
        <div className="image">
          <img src={Vision} alt="Business Illustration" />
        </div>
      </div>
    )
    
}

export default AboutC5;