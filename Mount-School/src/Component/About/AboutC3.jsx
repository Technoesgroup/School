import '../../Styles/About-CSS/AboutC3.css'; // Add CSS styles for the component
import Icon_1 from '../../image/mortarboard 1.png';
import Icon_2 from '../../image/Band.png';
import Icon_3 from '../../image/Book.png';
import useScrollToSection from "../Hook/CustomHook2";

const About3 = () => {

  useScrollToSection();

  const cardsData = [
    {
      icon: Icon_2,
      title: 'Your Child Deserves an Opportunity to Achieve Their Dreams to the Fullest',
      description: 'Unlock the doors to all-round holistic excellence at Mount Litera Zee School.',
    },
    {
      icon: Icon_3,
      title: 'Academic, Co-Curricular, Personal, Emotional, and Spiritual Brilliance',
      description: 'Time to ensure that your child gets what he deserves. It’s time to take him to Mount Litera Zee School.',
    },
    {
      icon: Icon_1,
      title: 'About Mount Litera Zee School',
      description: 'Brighten your child’s future at Mount Litera Zee School.',
    },
  ];





  return (
    <div id="About-section" className="about-section">
      <div className="leader-header_C3">
        <h1 className="text_About_C3">
          <span className="black-text_C3">About</span>
          <span className="blue-text_C3"> the School</span>
        </h1>
      </div>
      <div className="about-section__cards">
        {cardsData.map((card, index) => (
          <div key={index} className="about-section__card">
            <div className="White-Circle">
              <div className="about-section__icon">
                <img className="img-Icon" src={card.icon} alt="Card Icon" />
              </div>
            </div>
            <h3 className="about-section__card-title">{card.title}</h3>
            <p className="about-section__card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About3;

