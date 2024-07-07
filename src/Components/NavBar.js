import React from 'react';
import "../App.css";
import logo from '../img/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <h1 className="navbar-title">THE VIGILANT</h1>
      <div className="logout-icon">
        <FontAwesomeIcon icon={faSignOutAlt} />
      </div>
    </nav>
  );
}

export default Navbar;
