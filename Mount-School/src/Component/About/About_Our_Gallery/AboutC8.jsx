import React from 'react';
import '../../../Styles/About-CSS/About_Our_Gallery/AboutC8.css'; // CSS for individual cards

const RecognitionCard = ({ image, title, description, date, author, views, comments }) => {
  return (
    <div className="recognition-card">
      <div className="recognition-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="recognition-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="recognition-card__info">
          <span>{author}</span>
        <div>
        <span>👁️ {views}</span>
        <span>💬 {comments}</span>
        </div>
        </div>
        <span className='Date'>📅 {date}</span>
      </div>
    </div>
  );
};

export default RecognitionCard;

