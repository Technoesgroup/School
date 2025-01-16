import React from "react";
import "../../Styles/Home-CSS/HomeC7.css"; // Add custom styles here
import indImg from "../../image/Image_5.png";
import RangImg from "../../image/IMG-20241029-WA0056.jpg";
import DandiyaImg from "../../image/IMG20241009115034.jpg";
import AnualImg from "../../image/s2.jpg";
import KINGDOMImg from "../../image/IMG-20240529-WA0027.jpg";
import MILESImg from "../../image/398656726_799334345538648_1497034543001386452_n.jpg";

const events = [
  {
    title: "INDEPENDENCE DAY",
    description:
      "Students celebrated Independence Day with great enthusiasm, starting with a flag-hoisting ceremony, followed by soulful patriotic songs and energetic cultural performances.",
    image: indImg, // Replace with the actual image path
  },
  {
    title: "RANGOLI COMPETITION",
    description:
      "Students celebrated Independence Day with great enthusiasm, starting with a flag-hoisting ceremony, followed by soulful patriotic songs and energetic cultural performances.",
    image: RangImg, // Replace with the actual image path
  },
  {
    title: "DANDIYA CELEBRATION",
    description:
      "Students celebrated Independence Day with great enthusiasm, starting with a flag-hoisting ceremony, followed by soulful patriotic songs and energetic cultural performances.",
    image:DandiyaImg, // Replace with the actual image path
  },
  {
    title: "ANNUAL DAY",
    description:
      "Students celebrated Independence Day with great enthusiasm, starting with a flag-hoisting ceremony, followed by soulful patriotic songs and energetic cultural performances.",
    image: AnualImg, // Replace with the actual image path
  },
  {
    title: "KINGDOM OF MASKS",
    description:
      "Students celebrated Independence Day with great enthusiasm, starting with a flag-hoisting ceremony, followed by soulful patriotic songs and energetic cultural performances.",
    image: KINGDOMImg, // Replace with the actual image path
  },
  {
    title: "MILES OF SMILES",
    description:
      "Students celebrated Independence Day with great enthusiasm, starting with a flag-hoisting ceremony, followed by soulful patriotic songs and energetic cultural performances.",
    image: MILESImg, // Replace with the actual image path
  },
];

const Events = () => {
  return (
    <div className="events-section">
      <h2 className="events-title">
        EVENTS AT <span className="highlight-event">MLZS</span>
      </h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-content">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
