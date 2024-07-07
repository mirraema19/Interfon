// Card.tsx
import React from 'react';

const Card = ({ imageUrl, title, buttonText, onClick }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <h3>{title}</h3>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
};

export default Card;
