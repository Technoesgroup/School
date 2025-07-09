import React from "react";
import "../../Styles/Home-CSS/HomeC7.css"; // Add custom styles here
import indImg from "../../image/IndependentDay.svg";
import RangImg from "../../image/IMG-20241029-WA0060.jpg";
import DandiyaImg from "../../image/IMG20241009115034.jpg";
import AnualImg from "../../image/HindiDiwas.svg";
import { useNavigate } from 'react-router-dom';
import Janmashtami from "../../image/janmastmi2.svg";
import GreenDayCelebrations from "../../image/GreenDay.jpg";

const events = [

  {
    title: "Republic Day Celebration",
    description:
    "Mount Litera Zee School celebrated Independence Day with immense enthusiasm and pride. Our students mesmerized everyone with a splendid cultural program",
    image: indImg, // Replace with the actual image path
  },
  {
    title: "Diwali Celebration",
    description:
    "On the occasion of Diwali, the students of Mount Litera Zee School, Bihta, embraced the spirit of the Festival of Lights with much fervor and creativity. Each grade participated with great enthusiasm, engaging in a variety of festive activities.",
    image: RangImg, // Replace with the actual image path
  },
  {
    title: " Rass Dandiya Celebration",
    description:
      "The Raas Dandiya celebration as a true embodiment of the vibrant and festive spirit. The event commenced with a warm and gracious welcome extended by our talented students, setting the stage for a day filled with joy, energy",
    image:DandiyaImg, // Replace with the actual image path
  },
  {
    title: "Hindi Diwas 2024",
    description:
      "At Mount Litera Zee School, Bihta, the occasion of Hindi Diwas 2024 was celebrated with great reverence and respect. This day offers us a golden opportunity to express our admiration  and honour for our mother tongue, ",
    image: AnualImg, // Replace with the actual image path
  },
  {
    title: "Janmashtami Celebrations",
    description:
      "Mount Litera Zee School, Bihta celebrating the divine festival of Janmashtami with immense joy and enthusiasm. The little stars from the pre-primary section came together to commemorate this ",
    image: Janmashtami, // Replace with the actual image path
  },
  {
    title: "Green Day Celebrations",
    description:
      "Mount Litera Zee School, Bihta celebrating Green Day with immense enthusiasm and creativity, uniting students, teachers, and parents in a heartfelt tribute to environmental sustainability ",
    image: GreenDayCelebrations, // Replace with the actual image path
  },
];

const Events = () => {
   const navigate = useNavigate();

   const handleApllybtn = ()=>{
    navigate("/academics#Activities-section")
  }

  return (
    <div className="events-section">
      <h2 className="events-title">
      Events At Mount Litera Zee School, Bihta
      </h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img   loading="lazy" src={event.image} alt={event.title} className="event-image" />
            <h3 className="Image-event-title">{event.title}</h3>
            <div className="HomeC7-overlay"></div>
          </div>
        ))}
      </div>
      <button  className="view-btn-events" onClick={handleApllybtn} >View All</button>
    </div>
  );
};

export default Events;
