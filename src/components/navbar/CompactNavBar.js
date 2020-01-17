import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './CompactNavBar.css';

// Images
const storeLogo = require('../../assets/img/page-1.svg');

/**
 * Responsive NavBar
 * @component
 */
const CompactNavBar = () => {
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(!active);
  return (
    <nav className="compact-nav-bar">
      <div className="responsive-nav-items-container">
        <button className="nav-icon-button" onClick={toggleActive}>
          &#8801;
        </button>
        <nav className={`responsive-nav-items${active ? ' active' : ''}`}>
          <NavLink
            exact
            to="/"
            activeClassName="selected"
            onClick={toggleActive}
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="selected"
            onClick={toggleActive}
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/occasions"
            activeClassName="selected"
            onClick={toggleActive}
          >
            OCCASIONS
          </NavLink>
          <NavLink
            to="/order"
            activeClassName="selected"
            onClick={toggleActive}
          >
            ORDER
          </NavLink>
        </nav>
      </div>

      <NavLink className="store-icon-container" to="/">
        <img className="icon" src={storeLogo} alt="Vicky's Flowers icon" />
      </NavLink>
    </nav>
  );
};

export default CompactNavBar;
