import React from 'react';
import ImageCard1 from '../../../image/Image-Card1.png'; // Correct image path
import '../../../Styles/About-CSS/About_Our_Gallery/AboutC9.css'; // CSS for grid layout
import RecognitionCard from './AboutC8';

const AboutC9 = () => {
  const recognitionData = [
    {
      image: ImageCard1, // Corrected image reference
      title: 'Award Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'September 12, 2023',
      author: 'Headmaster',
      views: 20,
      comments: 5,
    },
    {
      image: ImageCard1, // Use another image or same based as above
      title: 'Award Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    },
    {
      image: ImageCard1, // Use another image or same based as above
      title: 'Award Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    },
    {
      image: ImageCard1, // Use another image or same based as above
      title: 'Award Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    },
    {
      image: ImageCard1, // Use another image or same based as above
      title: 'Award Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    },
    {
      image: ImageCard1, // Use another image or same based as above
      title: 'Award Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    },
    {
      image: ImageCard1, // Use another image or same based as above
      title: 'Award Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    },
    {
      image: ImageCard1, // Use another image or same based as above
      title: 'Award Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    },
    {
      image: ImageCard1, // Use another image or same based as above
      title: 'Award Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    }, {
      image: ImageCard1, // Use another image or same based as above
      title: 'Award Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    },
    {
      image: ImageCard1, // Use another image or same based as above
      title: 'Award Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    },
    {
      image: ImageCard1, // Use another image or same based as above
      title: 'Award Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'September 13, 2023',
      author: 'Headmaster',
      views: 15,
      comments: 3,
    },
  ];


  return (
    <div id='Awards-section' className="awards-recognition">
        <h1  className="text_About_C9">
        <span className="black-text_C9">OUR </span> 
       &nbsp;  <span className="blue-text_C9">AWARDS & RECOGNITION</span>
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

