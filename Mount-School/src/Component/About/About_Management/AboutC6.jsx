import React from 'react';
import '../../../Styles/About-CSS/About_Management_Css/AboutC6.css'; // CSS for styling

const ManagementCard = ({ image, name, description }) => {
  return (
    <div className="management-card">
      <div className="management-card__image">
        <img src={image} alt={name} />
      </div>
      <div className="management-card__content">
        <h3 className="management-card__name">{name}</h3>
        <p className="management-card__description">{description}</p>
      </div>
    </div>

  );
};

export default ManagementCard;
