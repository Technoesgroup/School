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
      title: 'YOUR CHILD DESERVES AN OPPORTUNITY TO ACHIEVE THEIR DREAMS TO THE FULLEST.',
      description: 'We provide a nurturing, dynamic environment where students thrive academically, socially, and personally. With world-class education, innovative teaching, and state-of-the-art facilities, we empower every child to grow, explore, and succeed.',
    },
    {
      icon: Icon_3,
      title: 'ACADEMIC, CO-CURRICULAR, PERSONAL, EMOTIONAL, AND SPIRITUAL BRILLIANCE.',
      description: 'We nurture well-rounded individuals through academic excellence, co-curricular growth, and personal development. With a globally aligned curriculum, diverse activities, and state-of-the-art facilities, we empower students to thrive with confidence.',
    },
    {
      icon: Icon_1,
      title: 'MOUNT LITERA ZEE SCHOOL BRIGHTENING THE STUDENTS FUTURE',
      description: 'We empower students with knowledge, skills, and values to thrive academically and beyond. With a holistic approach, we nurture talents, foster growth, and prepare them for a bright future.',
    },
  ];


  return (
    <div id="About-section" className="about-section">
      <div className="leader-header_C3">
        <h1 className="text_About_C3">
          <span className="black-text_C3">ABOUT  THE </span>
          <span className="blue-text_C3"> SCHOOL</span>
        </h1>
      </div>
      <div className="about-section__cards">
        {cardsData.map((card, index) => (
          <div key={index} className="about-section__card">
            <div className="White-Circle">
              <div className="about-section__icon">
                <img   loading="lazy" className="img-Icon" src={card.icon} alt="Card Icon" />
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

