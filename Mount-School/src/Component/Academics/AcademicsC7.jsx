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
      <h3 className="AcademicsC7-event-title">Republic Day Celebration, 2024</h3>
      <p className="AcademicsC7-event-description">
      Mount Litera Zee School, Bihta, celebrated Republic Day with great fervor and patriotism, honouring the spirit of unity, diversity, and national pride. The event was marked by a splendid array of performances that captured the essence of India’s rich cultural heritage. Our students mesmerized the audience with a vibrant cultural program, featuring heartfelt songs, energetic dances, and thought-provoking skits that paid tribute to our nation’s journey and the ideals enshrined in our Constitution.
      </p>
      <p>
      The ceremony commenced with the hoisting of the national flag, followed by the National Anthem, which resonated through the school grounds, filling everyone with a deep sense of pride and patriotism. As we reflected on the significance of this day, we remembered the founding principles of justice, equality, and liberty that form the bedrock of our democracy.
      </p>
      <p>
      Our Director and Principal delivered inspiring speeches, urging students to embrace the values of integrity, unity, and responsibility as they play their part in shaping the future of our nation. They emphasized the importance of nurturing the vision of a progressive India, where every citizen’s rights are respected, and freedom is cherished
      </p>
      <p>
      As we commemorate Republic Day, let us all reaffirm our commitment to upholding the legacy of our founding fathers, striving for a harmonious and prosperous future, and working together to strengthen the fabric of our great nation.
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
