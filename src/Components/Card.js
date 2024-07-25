import React from 'react';
import '../Card.css';

const Card = ({ imageUrl, title, buttonText, onDelete }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <button onClick={onDelete}>{buttonText}</button>
    </div>
  );
};

export default Card;
