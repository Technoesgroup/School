import  Vision  from '../../image/20240209_104231.svg';
import '../../Styles/About-CSS/AboutC5.css';
import useScrollToSection from "../Hook/CustomHook2";

function AboutC5(){
         useScrollToSection();

    return(
      <div  className="bc-contents">
            <div id='Vision-section' className="b-con">
              <div className="s-con">
              <h1  className="text_About_C5">
             OUR
               MISION
              </h1>
              <p>
              Every child is unique. It is a well-known fact that no two thumbprints are alike. In the same way, we believe that every child is born unique.  Each child has a unique brain network that shapes how he/she absorbs and responds to stimuli.  One way of teaching does not work for every child. We need to teach the way they learn, not force them to learn the way we teach. Education should foster real understanding: Understanding is different from acquiring information. 
              </p>
              </div>
              <div className="Mision-image">
                <img   loading="lazy" src={Vision} alt="Business Illustration"  className='AboutC5-Mision-image'/>
              </div>
            </div>
           <div className="bottom-paragrapgh-div">
           <p className="bottom-paragraph">
           Mere acquisition of information relies on memory, understanding relies on conceptual clarity. We are not assembly lines of syllabus and exams rather we help children make meaning of life and develop the muscle to lead life effectively. For this, we go beyond academics to include life skills, values and habits. Real understanding comes from an integrated approach and we have a vision of the child we aim to graduate and everything in our school is designed around that vision. Building design, pedagogy, teachers, curriculum content, activities and examinations – all are integrated to achieve this vision. A school is an eco-system where different factors have an effect on the child. Teachers, curriculum, assessments, environment, infrastructure, activities all come together to nurture the unique potential of the child.
            </p>
           </div>
         </div>
    )
    
}

export default AboutC5;