import React from 'react';
import '../Card.css'; // Asegúrate de importar el archivo CSS correcto

const Card = ({ imageUrl, title, buttonText, onClick }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-title">{title}</div>
      <button className="card-button" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
