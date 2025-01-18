import React from 'react';
import '../../Styles/Home-CSS/HomeC8.css'; // Add CSS styles for the component
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import imageParents1 from '../../image/WhatsApp Image 2025-01-18 at 17.06.11_ec006aeb.jpg';
import imageParents2 from '../../image/WhatsApp Image 2025-01-18 at 17.06.11_ec006aeb.jpg';
import imageParents3 from '../../image/WhatsApp Image 2025-01-18 at 17.06.11_ec006aeb.jpg';
import imageParents4 from '../../image/WhatsApp Image 2025-01-18 at 17.06.11_ec006aeb.jpg';
import imageParents5 from '../../image/WhatsApp Image 2025-01-18 at 17.06.11_ec006aeb.jpg';
import imageParents6 from '../../image/WhatsApp Image 2025-01-18 at 17.06.11_ec006aeb.jpg';
import imageParents7 from '../../image/WhatsApp Image 2025-01-18 at 17.06.11_ec006aeb.jpg';


const Home8 = () => {
  const cardsData = [
    {
      icon: imageParents1, // Add the relevant icon or replace with an image
      title: 'Your Child Deserves an Opportunity to Achieve Their Dreams to the Fullest',
      description: 'Unlock the doors to all-round holistic excellence at Mount Litera Zee School.',
    },
    {
      icon: imageParents2,
      title: 'Academic, Co-Curricular, Personal, Emotional, and Spiritual Brilliance',
      description: 'Time to ensure that your child gets what he deserves. It’s time to take him to Mount Litera Zee School.',
    },
    {
      icon: imageParents3,
      title: 'About Mount Litera Zee School',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
      icon: imageParents4, // Add the relevant icon or replace with an image
      title: 'Your Child Deserves an Opportunity to Achieve Their Dreams to the Fullest',
      description: 'Unlock the doors to all-round holistic excellence at Mount Litera Zee School.',
    },
    {
      icon: imageParents5,
      title: 'Academic, Co-Curricular, Personal, Emotional, and Spiritual Brilliance',
      description: 'Time to ensure that your child gets what he deserves. It’s time to take him to Mount Litera Zee School.',
    },
    {
      icon:imageParents6,
      title: 'About Mount Litera Zee School',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
      icon: imageParents7, // Add the relevant icon or replace with an image
      title: 'Your Child Deserves an Opportunity to Achieve Their Dreams to the Fullest',
      description: 'Unlock the doors to all-round holistic excellence at Mount Litera Zee School.',
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
          <img  className='img-Icon' src={card.icon} alt="H" />
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