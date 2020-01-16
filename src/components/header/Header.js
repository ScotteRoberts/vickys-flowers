import React, { useState } from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import './Header.css';

import Cart from '../cart';

const CompactNav = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className="full-nav">
      <div className="responsive-nav-items-container">
        <button className="nav-icon-button" onClick={() => setActive(!active)}>
          &#8801;
        </button>
        <nav className={`responsive-nav-items${active ? ' active' : ''}`}>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/occasions">OCCASSIONS</Link>
          <Link to="/order">ORDER</Link>
        </nav>
      </div>

      <Link className="store-icon-container" to="/">
        <img
          className="icon"
          src={require('../../assets/img/page-1.svg')}
          alt="Vicky's Flowers icon"
        />
      </Link>
    </nav>
  );
};

const FullNav = () => (
  <nav className="full-nav">
    {/* TODO: Get back to making this responsive */}
    <Link className="store-icon-container" to="/">
      <img
        className="icon"
        src={require('../../assets/img/page-1.svg')}
        alt="Vicky's Flowers icon"
      />
    </Link>
    <Link to="/">HOME</Link>
    <Link to="/about">ABOUT US</Link>
    <Link to="/occasions">OCCASSIONS</Link>
    <Link to="/order">ORDER</Link>
  </nav>
);

const Header = props => (
  <header className="header">
    <FullNav />
    <Cart />
  </header>
);

Header.propTypes = {};

export default Header;
