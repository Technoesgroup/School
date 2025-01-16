import React from 'react';
import '../../Styles/Home-CSS/HomeC8.css'; // Add CSS styles for the component
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Home8 = () => {
  const cardsData = [
    {
      // icon: , // Add the relevant icon or replace with an image
      title: 'Your Child Deserves an Opportunity to Achieve Their Dreams to the Fullest',
      description: 'Unlock the doors to all-round holistic excellence at Mount Litera Zee School.',
    },
    {
      // icon: Icon_3,
      title: 'Academic, Co-Curricular, Personal, Emotional, and Spiritual Brilliance',
      description: 'Time to ensure that your child gets what he deserves. It’s time to take him to Mount Litera Zee School.',
    },
    {
      // icon: Icon_1,
      title: 'About Mount Litera Zee School',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
  ];

  return (
    <div className="Home-section">
      <div className="leader-header_C3">
        <h1  className='text_About_C3'>
          <span className="black-text_C3">PARENT'S</span>
           <span className="blue-text_C3"> SPEAK</span>
        </h1>
      </div>
      <div className="Home-section__cards">
        {cardsData.map((card, index) => (
          <div key={index} className="Home-section__card">
          <div className='Home-White-Circle'>
          <div className="Home-section__icon">
          <img  className='img-Icon' src='' alt="H" />
          </div>
          </div>
          <p className="Home-section__card-description">{card.description}</p>
            <h2 className="Home-section__card-title">{card.title}</h2>
           
          </div>
        ))}
      </div>
      <div  className='ICon-left-right'>
             <div className='left-icon'> <KeyboardArrowLeftIcon /></div>
             <div  className='right-icon'> <ChevronRightIcon /></div>
      </div>
    </div>
  );
};

export default Home8;