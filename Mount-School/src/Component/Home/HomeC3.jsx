import React from 'react';
import '../../Styles/Home-CSS/HomeC3.css';
import videoCampus from '../../image/School_Video.mp4';
import ScienceExhibition from '../../image/WhatsApp Image 2024-12-30 at 18.51.42_bb1fa60a.jpg';
import PTM from '../../image/393834027_792046122934137_8956640947945114484_n.jpg';
import Annual_Function from '../../image/1B7A5369.jpg';
import Parent_Orientation_Programme from '../../image/teacher training 2.jpg';

const events = [
  {
    title: 'Science Exhibition',
    description: 'Mount Litera Zee School Bitha is set to ignite the spark of curiosity with its much-awaited Science Exhibition this December.',
    date: 'Dec 2024',
    image: ScienceExhibition,
  },
  {
    title: 'PTM',
    description: 'Mount Litera Zee School Bitha will be hosting the Parent-Teacher Meeting (PTM) for P12/Pre-Board on 18th January. This meeting will provide...',
    date: 'Jan 2024',
    image: PTM,
  },
  {
    title: 'Annual Function',
    description: 'In the waning days of January, Mount Litera Zee School Bitha shall, with great pride, present its Annual Function. This grand occasion...',
    date: 'Feb 2024',
    image: Annual_Function,
  },
  {
    title: 'Parent Orientation Programme',
    description: 'A Parent Orientation Programme is soon to be held, where Mount Litera Zee School Bitha shall reveal SEP (Students Empowerment ...',
    date: 'Dec 2020',
    image: Parent_Orientation_Programme,
  },
  // {
  //   title: 'Parent Orientation Programme',
  //   description: 'A Parent Orientation Programme is soon to be held, where Mount Litera Zee School Bitha shall reveal SEP (Students Empowerment ...',
  //   date: 'Dec 2020',
  //   image: Parent_Orientation_Programme,
  // },
  // {
  //   title: 'Parent Orientation Programme',
  //   description: 'A Parent Orientation Programme is soon to be held, where Mount Litera Zee School Bitha shall reveal SEP (Students Empowerment ...',
  //   date: 'Dec 2020',
  //   image: Parent_Orientation_Programme,
  // },
  // {
  //   title: 'Parent Orientation Programme',
  //   description: 'A Parent Orientation Programme is soon to be held, where Mount Litera Zee School Bitha shall reveal SEP (Students Empowerment ...',
  //   date: 'Dec 2020',
  //   image: Parent_Orientation_Programme,
  // },

];

const EventCard = ({ title, description, date, image }) => {
  return (
    <div className="Home3-event-card">
      <img src={image} alt={title} className="Home3-event-image" />
      <div className="Home3-event-details">
        <h3 className="Home3-event-title">{title}</h3>
        <p className="Home3-event-description">{description}</p>
        <p className="Home3-event-date">{date}</p>
      </div>
    </div>
  );
};

const HomeC3 = () => {
  return (
    <div className="Home3-container-Big">
      <div className="left-section_3">
        <video className="campus-video" muted autoPlay loop>
          <source src={videoCampus} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="campus-text">
          <h1>Campus Tour</h1>
        </div>
      </div>
      
    <div className="right-section_3">
      <div className='home-container-blue'> 
        <h2 className="Home3-news-title_up">LATEST NEWS AND UPDATES</h2> 
        </div>
    <div className="Home3-event-containerss">
      {events.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          description={event.description}
          date={event.date}
          image={event.image}
        />
      ))}
      {/* <button className="view-all-button">View All</button> */}
    </div>
   </div>

    </div>
  );
};

export default HomeC3;

