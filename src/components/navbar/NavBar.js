import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

// Images
const storeLogo = require('../../assets/img/page-1.svg');

const NavBar = () => (
  <nav className="nav-bar">
    {/* TODO: Make the Icon fit the container */}
    <NavLink className="store-icon-container" to="/">
      <img className="icon" src={storeLogo} alt="Vicky's Flowers icon" />
    </NavLink>
    <NavLink exact to="/" activeClassName="selected">
      HOME
    </NavLink>
    <NavLink to="/about" activeClassName="selected">
      ABOUT US
    </NavLink>
    <NavLink to="/occasions" activeClassName="selected">
      OCCASIONS
    </NavLink>
    <NavLink to="/order" activeClassName="selected">
      ORDER
    </NavLink>
  </nav>
);

export default NavBar;
