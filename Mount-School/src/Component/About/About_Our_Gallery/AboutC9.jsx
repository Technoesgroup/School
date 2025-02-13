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
import ImageCard12 from '../../../image/Trophy_7.svg';
import ImageCard13 from '../../../image/Trophy_6.svg';  
import ImageCard14 from '../../../image/Trophy_4.svg'; 
import ImageCard15 from '../../../image/Trophy_8.svg'; 
import ImageCard16 from '../../../image/Trophy_1.svg'; 
import ImageCard17 from '../../../image/Trophy_2.svg'; 
import ImageCard18 from '../../../image/Trophy_3.svg'; 
import ImageCard19 from '../../../image/Trophy_10.png'; 
import ImageCard20 from '../../../image/Trophy_11.png'; 

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
      title: 'Mount Litera Zee School, Entrepreneur Meet ',
      description: 'The Entrepreneur Meet hosted by Mount Litera Zee School, Bihta was a landmark event that provided a unique platform for students to explore and develop entrepreneurial skills. With a focus on innovation and problem-solving, the event encouraged participants to present creative business ideas and strategies. This initiative not only inspired students to think outside the box but also instilled in them a sense of confidence and leadership, fostering a generation of future entrepreneurs and leaders.',
    },
    {
      image: ImageCard5, // Use another image or same based as above
      title: 'Winner: Karate Championship; The Royal Challengers',
      description: 'Students of Mount Litera Zee School, Bihta displayed outstanding martial arts skills to emerge as winners at the Karate Championship hosted by The Royal Challengers. Their disciplined training, focus, and perseverance stood out, earning them the top spot in this prestigious competition. This achievement reflects the school’s emphasis on developing physical fitness, discipline, and sportsmanship, shaping students into resilient and determined individuals ready to take on challenges.',
    },
    {
      image: ImageCard6, // Use another image or same based as above
      title: 'Winner: U-19 Boys, CBSE Cluster',
      description: 'The Under-19 Boys team of Mount Litera Zee School, Bihta emerged victorious in the CBSE Cluster tournament, displaying exceptional athletic skills and teamwork. Competing against strong opponents, the team exhibited unparalleled determination, strategic gameplay, and sportsmanship. This victory underscores the school’s dedication to nurturing young talent and providing a robust platform for students to shine in sports while balancing their academic pursuits.',
    },
    {
      image: ImageCard7, // Use another image or same based as above
      title: 'Winner: KABADDI KING; CBSE Cluster',
      description: ' Mount Litera Zee School Bihta’s Kabaddi team earned the prestigious title of “KABADDI King” at the CBSE Cluster competition, solidifying their position as champions. Their outstanding performance, marked by agility, teamwork, and tactical brilliance, captivated the audience and left an indelible mark on the tournament. This achievement not only brought immense pride to the school but also reinforced its reputation for fostering excellence in sports and creating champions who excel on and off the field..',
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
      title: 'Winner: KBD Juniors, National Finals; Star Sports Pro Kabaddi',
      description: 'The KBD Juniors team from Mount Litera Zee School, Bihta emerged as National Champions in the Star Sports Pro Kabaddi Tournament, showcasing their unparalleled skill, teamwork, and determination. Competing on a national stage, the team demonstrated exceptional strategic gameplay and agility, earning them this prestigious title. This victory not only brought immense pride to the school but also highlighted its emphasis on nurturing sports talent and fostering a winning mindset among students.',
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
      title: 'Winner: District Level Sports Meet, Government of Bihar',
      description: 'Mount Litera Zee School, Bihta achieved a stellar victory at the District Level Sports Meet, organized by the Government of Bihar. This accomplishment highlights the extraordinary talent, dedication, and discipline of our students in various sports categories. Competing against top schools in the district, our athletes showcased their prowess in individual and team events, bringing glory to the school. This achievement reinforces the school’s dedication to promoting physical fitness and sports excellence.',
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
    {
    image: ImageCard13, // Use another image or same based as above
     title: 'Winner: KBD Juniors, National Finals; Star Sports Pro Kabaddi',
     description: 'The KBD Juniors team from Mount Litera Zee School, Bihta emerged as National Champions in the Star Sports Pro Kabaddi Tournament, showcasing their unparalleled skill, teamwork, and determination. Competing on a national stage, the team demonstrated exceptional strategic gameplay and agility, earning them this prestigious title. This victory not only brought immense pride to the school but also highlighted its emphasis on nurturing sports talent and fostering a winning mindset among students.',
    },
    {
      image: ImageCard14, // Use another image or same based as above
      title: 'IMA Star Fighter: Guest of Honour, Karate Championship ',
      description: 'Mount Litera Zee School, Bihta was privileged to be recognized as a Guest of Honour at the IMA Star Fighter Karate Championship. This accolade acknowledges the school’s significant contribution to promoting martial arts and fostering a spirit of discipline and sportsmanship among students. The event highlighted the school’s dedication to nurturing talent and providing platforms for students to showcase their abilities at prestigious events, contributing to their overall growth and confidence.',
    },
    {
      image: ImageCard15, // Use another image or same based as above
      title: ' Memento: Inner Wheel Club, Patna',
      description: 'The Inner Wheel Club of Patna presented Mount Litera Zee School, Bihta with a Memento in recognition of its impactful contributions to community welfare. The award acknowledges the school’s efforts in organizing meaningful initiatives that benefit society and inspire students to engage in social causes. Through its programs, the school continues to instill values of compassion, service, and leadership in students, empowering them to make a positive difference in their communities.',
    },
    {
      image: ImageCard16, // Use another image or same based as above
       title: 'Memento: Sainik School Nalanda',
       description: ' Mount Litera Zee School, Bihta was honoured with a Memento by Sainik School Nalanda in recognition of its exemplary participation and contributions to inter-school initiatives. This accolade highlights the school’s dedication to fostering collaborative learning and excellence across various domains. By participating in events alongside other prestigious institutions, the school continues to inspire students to build camaraderie, leadership skills, and a competitive spirit that prepares them for future challenges.',
      },
      {
        image: ImageCard17, // Use another image or same based as above
        title: 'Participation Memento from Hindustan Olympiad',
        description: 'The Hindustan Olympiad, a nationwide academic platform, awarded Mount Litera Zee School, Bihta with a Participation Memento, celebrating the school’s enthusiastic involvement. This recognition highlights the dedication of our students and teachers in embracing scholastic challenges that test intellectual abilities. Through participation in this esteemed competition, our students not only showcased their academic brilliance but also gained invaluable exposure to a competitive environment, paving the way for future achievements in the academic arena.',
      },
      {
        image: ImageCard18, // Use another image or same based as above
        title: 'Letter of Appreciation by Science Olympiad Federation',
        description: 'Mount Litera Zee School, Bihta proudly received a Letter of Appreciation from the esteemed Science Olympiad Federation for its unwavering commitment to academic excellence. This recognition was awarded to our visionary principal, Dr. Kumar Ravi Prakash, for his outstanding leadership in fostering a culture of scientific Enquiry and critical thinking among students. The award signifies the school’s consistent efforts in encouraging young minds to excel in national-level science competitions and nurturing future innovators.',
      },
      {
        image: ImageCard19, // Use another image or same based as above
        title: 'Memento: Peace Scout Guide',
        description: 'Mount Litera Zee School, Bihta received the prestigious Peace Scout Guide Memento for its exceptional efforts in promoting peace, leadership, and community service. This recognition underscores the school’s commitment to instilling values of harmony, teamwork, and service in students. By engaging in activities that foster a sense of responsibility and global citizenship, the school has inspired students to be proactive contributors to society and advocates of peace in their communities.',
      },
      {
        image: ImageCard20, // Use another image or same based as above
        title: 'Patna District Okinawan Shorin-Ryu Karate Do Championship',
        description: 'Students from Mount Litera Zee School, Bihta showcased exemplary martial arts skills at the  Patna District Okinawan Shorin-Ryu Karate Do Championship. Their stellar performance earned them accolades and established the school as a center of excellence in martial arts. This achievement reflects the students’ dedication, discipline, and rigorous training, as well as the school’s emphasis on nurturing well-rounded individuals who excel in both academics and co-curricular activities.',
      },
  ];


  return (
    <div id='Awards-section' className="awards-recognition">
        <h1  className="text_About_C9">
         AWARDS
       & 
      HONORS  
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

