import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import img from '../img/img 1.jpg';

function Content() {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="content-container">

      <div className="image-container">
        {showImage && <img src={img} alt="Imagen" className="content-image" />}
      </div>
      
      <div className="icon-container">

        <div 
          className="icon-link" 
          onClick={() => setShowImage(true)} 
        >
          <div className="icon">
            <FontAwesomeIcon icon={faAddressBook} size="3x" />
            <p>MONITOREAR</p>
          </div>
        </div>
        
        <div className="icon-link">
          <div className="icon">
            <FontAwesomeIcon icon={faPhone} size="3x" />
            <p>HABLAR</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
