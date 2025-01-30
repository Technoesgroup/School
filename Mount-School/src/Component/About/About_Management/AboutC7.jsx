import React from 'react';
import ManagementCard_1 from '../../../image/First-Image.png';
import ManagementCard_2 from '../../../image/Second-Image.png';
import '../../../Styles/About-CSS/About_Management_Css/AboutC7.css'; // For page layout
import ManagementCard from './AboutC6';

const OurManagement = () => {
  const managementData = [
    {
      image: ManagementCard_1, // Correct usage of the image URL
      name: 'Mr. Navin Kumar',
      description: `Mr Navin Kumar, Chairman of Mount Litera Zee School, has steered the school to many successes. Started in 2016, the school provides world class education right from pre-school to high school. Mount Litera Zee is renowned to nurture free-thinking, socially responsible students, in an active and free atmosphere, to make students truly world ready. 
Today the school has a strength of 2000 students and offers CBSE curriculum. The school believes in a holistic approach to education with expert tutelage, creative freedom and inspiring innovation, being the key to molding students from core to advanced knowledge. `,
    },
    {
      image: ManagementCard_2,
      name: 'Dr. Kumar Ravi Prakash',
      description: `Dr. Kumar Ravi Prakash, an accomplished Principal, holds advanced degrees in English and Education, including a Ph.D. His leadership in reputed schools has driven academic excellence, modernized curriculums, and fostered inclusive, student-centered environments. 
      Recognized with awards like the Guru Shiksha Samman, he is dedicated to the holistic development of students, individualized learning, and empowering educators. Dr. Prakash envisions the school as a vibrant hub of intellectual growth, preparing students for academic success and meaningful societal contributions. He emphasizes collaboration, respect, and innovation to nurture critical thinking and lifelong learning. His approach ensures that education supports the academic, emotional, and social development of every student`,
    },
  ];

  return (
    <div id='Management-section'  className="our-management">
         <h1  className="text_About_C7">
        <span className="black-text_C7">OUR  </span> 
        <span className="blue-text_C7">  MANAGEMENT</span>
        </h1>
       {/* <div className="lines_C7">
        <div className="line_C7 black-line_C7"></div>
        <div className="line_C7 red-line_C7"></div>
      </div> */}
      {managementData.map((member, index) => (
        <ManagementCard
          key={index}
          image={member.image}
          name={member.name}
          description={member.description}
        />
      ))}
    </div>
  );
};

export default OurManagement;
