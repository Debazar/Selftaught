import React, { useState } from 'react';
import './Navbar.css';
import MenuIcon from '../assets/images.png'; 

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo">LearnIt</div>
      <div className='search-bar'>
        <input type='text' placeholder='Search...'/>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={MenuIcon} alt="Menu" />
      </div>
      <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;