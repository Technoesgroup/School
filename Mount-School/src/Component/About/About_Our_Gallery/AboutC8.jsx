import React from 'react';
import '../../../Styles/About-CSS/About_Our_Gallery/AboutC8.css'; // CSS for individual cards

const RecognitionCard = ({ image, title, description,}) => {
  return (
    <div className="recognition-card">
      <div className="recognition-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="recognition-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
  
      </div>
    </div>
  );
};

export default RecognitionCard;

