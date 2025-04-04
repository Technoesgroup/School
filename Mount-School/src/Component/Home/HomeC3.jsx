import React, { useRef, useState } from 'react';
import '../../Styles/Home-CSS/HomeC3.css';
import videoCampus from '../../image/School_Video.mp4';
import ScienceExhibition from '../../image/WhatsApp Image 2024-12-30 at 18.51.42_bb1fa60a.jpg';
import PTM from '../../image/393834027_792046122934137_8956640947945114484_n.jpg';
import Annual_Function from '../../image/1B7A5369.jpg';
import Parent_Orientation_Programme from '../../image/teacher training 2.jpg';
import Career from '../../image/373300263_759440476194702_7710447674765630293_n.jpg';
import pre_board from '../../image/Gro.png';
import Induction from '../../image/Frame(4).jpg';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlayDisabledIcon from '@mui/icons-material/PlayDisabled';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import imgjet from  '../../image/Marks.png';

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
    date: 'Jan 2025',
    image: PTM,
  },
  {
    title: 'Annual Function',
    description: 'In the waning days of January, Mount Litera Zee School Bitha shall, with great pride, present its Annual Function. This grand occasion...',
    date: 'Feb 2025',
    image: Annual_Function,
  },
  {
    title: 'Parent Orientation Programme',
    description: 'A Parent Orientation Programme is soon to be held, where Mount Litera Zee School Bitha shall reveal SEP (Students Empowerment ...',
    date: 'Dec 2024',
    image: Parent_Orientation_Programme,
  },
  {
    title: 'Career Counselling Session',
    description: 'Mount Litera Zee School Bihta is set to ignite the spark of curiosity with its much-awaited Science Exhibition this December...',
    date: '27 Dec 2024',
    image: Career,
  },
  {
    title: 'Pre-Board 2 Examinations',
    description: 'Mount Litera Zee School Bihta will be hosting the Parent-Teacher Meeting (PTM) for PT2/Pre-Board on 18th January. This meeting will provide ...',
    date: 'Jan 2025',
    image: pre_board,
  },
  {
    title: 'Parent Induction Programme',
    description: 'In the waning days of January, Mount Litera Zee School Bihta shall, with great pride, present its Annual Function. This grand occasion ...',
    date: 'Jan 2025',
    image: Induction,
  },

  {
    title: 'Student Empowerment Programme (SEP) – Demo Classes Announcement',
    description: 'We are delighted to announce that SEP Demo Classes for Grades VI to X will commence from 7th April 2025 at Mount Litera Zee School, Bihta.',
    date: '7 April 2025',
    image: imgjet,
  },
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
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(true); // State to track play/pause
  const [isMuted, setIsMuted] = useState(true); // State to track mute/unmute

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteUnmute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="Home3-container-Big">
      <div className="left-section_3">
        <video
          className="campus-video"
          muted={isMuted}
          autoPlay
          loop
          ref={videoRef} // Attach the ref to the video element
        >
          <source src={videoCampus} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="campus-text">
          <h1>Campus Tour</h1>
          <div className="video-controls">
            {/* Play/Pause Button */}
            <button onClick={handlePlayPause} className="HomeC3-video-control-button">
              {isPlaying ?  <PlayArrowIcon /> :  <PlayDisabledIcon />}
            </button>
            {/* Mute/Unmute Button */}
            <button onClick={handleMuteUnmute} className="HomeC3-video-control-button" >
            {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon/>}
            </button>
             
          </div>
        </div>
      </div>

      <div className="right-section_3">
        <div className="home-container-blue">
          <h2 className="Home3-news-title_up">LATEST NEWS AND UPDATES</h2>
        </div>
        <div className="Home3-event-containerss">
          <div className="scroll-content">
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                description={event.description}
                date={event.date}
                image={event.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeC3;


