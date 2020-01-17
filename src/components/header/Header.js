import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import './Header.css';

import { Cart } from '../cart';
import { NavBar, CompactNavBar } from '../navbar';

const Header = props => {
  const isCompact = useMediaQuery({ query: '(max-width: 1000px)' });
  return (
    <header className="header">
      {isCompact ? <CompactNavBar /> : <NavBar />}
      <Cart />
    </header>
  );
};

Header.propTypes = {};

export default Header;
