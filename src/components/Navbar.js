import React, { useState } from "react";
import logo from "../img/shamz.png"

export default function NavBar() {

 const [showMenu, setShowMenu] = useState(false);

 const toggleMenu = () => {
  setShowMenu(prevShowMenu => !prevShowMenu);
 };

 const handleLinkClick = () => {
  setShowMenu(false);
 };

 return (
  <header className="Navbar">
   <img src={logo} alt="Logo" className="Logo" />

   <div className="menu-btn" onClick={toggleMenu}>
    <span className={`menu-btn_burger ${showMenu ? 'open' : ''}`}></span>
   </div>

   <nav className={`nav ${showMenu ? 'open' : ''}`}>
    <ul className={`menu-nav ${showMenu ? 'open' : ''}`}>
     <li className={`menu-nav_item ${showMenu ? 'open' : ''}`}>
      <a href="#hero" onClick={handleLinkClick} className="menu-nav_link">Home</a>
     </li>
     <li className={`menu-nav_item ${showMenu ? 'open' : ''}`}>
      <a href="#about" onClick={handleLinkClick} className="menu-nav_link">About</a>
     </li>
     <li className={`menu-nav_item ${showMenu ? 'open' : ''}`}>
      <a href="#services" onClick={handleLinkClick} className="menu-nav_link">Services</a>
     </li>

    </ul>
   </nav>
  </header>
 );
}
