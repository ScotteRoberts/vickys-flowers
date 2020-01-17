import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Header.css';

import { Cart } from '../cart';
import { NavBar, CompactNavBar } from '../navbar';

/**
 * Header component: contains navigation and cart items
 * @component
 */
const Header = () => {
  // JS Media Query: custom sizing requirement
  const isCompact = useMediaQuery({ query: '(max-width: 1000px)' });
  return (
    <header className="header">
      {isCompact ? <CompactNavBar /> : <NavBar />}
      <Cart />
    </header>
  );
};

export default Header;
