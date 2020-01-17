import React from 'react';
import { Link } from '@reach/router';
import './NavBar.css';

const NavBar = () => (
  <nav className="nav-bar">
    {/* TODO: Make the Icon fit the container */}
    <Link className="store-icon-container" to="/">
      <img
        className="icon"
        src={require('../../assets/img/page-1.svg')}
        alt="Vicky's Flowers icon"
      />
    </Link>
    <Link to="/">HOME</Link>
    <Link to="/about">ABOUT US</Link>
    <Link to="/occasions">OCCASIONS</Link>
    <Link to="/order">ORDER</Link>
  </nav>
);

export default NavBar;
