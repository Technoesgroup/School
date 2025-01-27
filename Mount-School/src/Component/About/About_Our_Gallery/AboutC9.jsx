import React from 'react';
import ImageCard1 from '../../../image/Photo (11).png'; 
import ImageCard2 from '../../../image/Photo (10).png'; 
import ImageCard3 from '../../../image/Photo (9).png'; 
import ImageCard4 from '../../../image/Photo.png'; 
import ImageCard5 from '../../../image/Photo (1).png'; 
import ImageCard6 from '../../../image/Photo (2).png'; 
import ImageCard7 from '../../../image/Photo (5).png'; 
import ImageCard8 from '../../../image/Photo (4).png'; 
import ImageCard9 from '../../../image/Photo (3).png'; 
import ImageCard10 from '../../../image/Photo (6).png'; 
import ImageCard11 from '../../../image/Photo (7).png'; 
import ImageCard12 from '../../../image/Photo (8).png'; 

import '../../../Styles/About-CSS/About_Our_Gallery/AboutC9.css'; // CSS for grid layout
import RecognitionCard from './AboutC8';

const AboutC9 = () => {
  const recognitionData = [
    {
      image: ImageCard1, // Corrected image reference
      title: 'Winner: KBD Juniors, National Finals; Star Sports Pro Kabaddi',
      description: 'The KBD Juniors team from Mount Litera Zee School emerged as National Champions in the Star Sports Pro Kabaddi Tournament, showcasing their unparalleled skill, teamwork, and determination. Competing on a national stage, the team demonstrated exceptional strategic gameplay and agility, earning them this prestigious title.',
     
    },
    {
      image: ImageCard2, // Use another image or same based as above
      title: 'Winner: U-19 Boys, CBSE Cluster',
      description: 'The Under-19 Boys team of Mount Litera Zee School emerged victorious in the CBSE Cluster tournament, displaying exceptional athletic skills and teamwork. Competing against strong opponents, the team exhibited unparalleled determination, strategic gameplay, and sportsmanship. This victory underscores the school’s dedication to nurturing young talent and providing a robust platform for students to shine in sports while balancing their academic pursuits.',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    },
    {
      image: ImageCard3, // Use another image or same based as above
      title: 'Winner: Karate Championship; The Royal Challengers',
      description: 'Students of Mount Litera Zee School displayed outstanding martial arts skills to emerge as winners at the Karate Championship hosted by The Royal Challengers. Their disciplined training, focus, and perseverance stood out, earning them the top spot in this prestigious competition.14. This achievement reflects the school’s emphasis on developing physical fitness, discipline, and sportsmanship,.',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    },
    {
      image: ImageCard4, // Use another image or same based as above
      title: 'Runner-Up: Under 14 State Handball Competition',
      description: 'Demonstrating exceptional skill, teamwork, and perseverance, the Under 14 Handball team of Mount Litera Zee School secured the Runner-Up position in the State Handball Competition. Competing against some of the best teams in the state, our players showcased remarkable athleticism, strategic gameplay, and sportsmanship.',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    },
    {
      image: ImageCard5, // Use another image or same based as above
      title: 'Mount Litera Zee School Entrepreneur Meet 2016',
      description: 'The 2016 Entrepreneur Meet hosted by Mount Litera Zee School was a landmark event that provided a unique platform for students to explore and develop entrepreneurial skills. With a focus on innovation and problem-solving, the event encouraged participants to present creative business ideas and strategies.',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    },
    {
      image: ImageCard6, // Use another image or same based as above
      title: 'Winner: District Level Sports Meet 2021, Government of Bihar',
      description: 'Mount Litera Zee School achieved a stellar victory at the District Level Sports Meet 2021, organized by the Government of Bihar. This accomplishment highlights the extraordinary talent, dedication, and discipline of our students in various sports categories. Competing against top schools in the district, our athletes showcased their prowess in individual and team events, bringing glory to the school.',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    },
    {
      image: ImageCard7, // Use another image or same based as above
      title: 'Winner: KBD Juniors, National Finals; Star Sports Pro Kabaddi',
      description: 'The KBD Juniors team from Mount Litera Zee School emerged as National Champions in the Star Sports Pro Kabaddi Tournament, showcasing their unparalleled skill, teamwork, and determination. Competing on a national stage, the team demonstrated exceptional strategic gameplay and agility, earning them this prestigious title.',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    },
    {
      image: ImageCard8, // Use another image or same based as above
      title: 'Winner Girls: Tug of War; Annual Sports Meet',
      description: 'The girls’ team from Mount Litera Zee School showcased their strength and coordination to secure victory in the Tug of War event during the Annual Sports Meet. This win reflects the spirit of unity, perseverance, and determination among our students. Such achievements highlight the school’s commitment to promoting gender equality and empowering young girls to excel in every field, from academics to athletics, fostering confidence ',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    },
    {
      image: ImageCard9, // Use another image or same based as above
      title: 'Patna District Okinawan Shorin-Ryu Karate Do Championship, 2019',
      description: 'Students from Mount Litera Zee School showcased exemplary martial arts skills at the 2019 Patna District Okinawan Shorin-Ryu Karate Do Championship. Their stellar performance earned them accolades and established the school as a center of excellence in martial arts. This achievement reflects the students’ dedication, discipline as well as the school’s emphasis on nurturing well-rounded individuals.',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    }, {
      image: ImageCard10, // Use another image or same based as above
      title: 'Memento of Participation: Volleyball Tournament, CBSE Cluster',
      description: 'Mount Litera Zee School proudly received a Memento of Participation at the CBSE Cluster Volleyball Tournament. This award recognizes the enthusiasm, teamwork, and dedication displayed by our students during the competition. Participating in this prestigious event provided students with an excellent opportunity to hone their skills, gain competitive exposure, and showcase their sportsmanship',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    },
    {
      image: ImageCard11, // Use another image or same based as above
      title: 'Winner: District-Level School Sports Competition, The Department of Art, Youth & Culture',
      description: 'At the District-Level School Sports Competition organized by The Department of Art, Youth & Culture, Mount Litera Zee School secured the winner’s title in multiple categories. This prestigious event showcased the athletic prowess and teamwork of our students, who performed exceptionally well against other leading schools',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    },
    {
      image: ImageCard12, // Use another image or same based as above
      title: 'International School Award: British Council',
      description: 'Mount Litera Zee School was conferred with the esteemed International School Award by the British Council for its commitment to global education and excellence. This recognition celebrates the school’s innovative and inclusive approach to fostering cultural exchange, creativity, and collaboration. By integrating international perspectives into the curriculum',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    },
  ];


  return (
    <div id='Awards-section' className="awards-recognition">
        <h1  className="text_About_C9">
        <span className="black-text_C9"></span> 
       &nbsp;  <span className="blue-text_C9">AWARDS & HONORS</span>
        </h1>
       {/* <div className="lines_C9">
        <div className="line_C9 black-line_C9"></div>
        <div className="line_C9 red-line_C9"></div>
      </div> */}
      <div className="awards-recognition__grid">
        {recognitionData.map((item, index) => (
          <RecognitionCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AboutC9;

