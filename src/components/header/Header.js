import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import './Header.css';

import Cart from '../cart';

const Header = props => (
  <header className="header">
    <nav>
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
    <Cart />
  </header>
);

Header.propTypes = {};

export default Header;
