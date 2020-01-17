import React, { useState } from 'react';
import { Link } from '@reach/router';
import './CompactNavBar.css';

/**
 * Responsive NavBar
 * @component
 */
const CompactNavBar = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className="compact-nav-bar">
      <div className="responsive-nav-items-container">
        <button className="nav-icon-button" onClick={() => setActive(!active)}>
          &#8801;
        </button>
        <nav className={`responsive-nav-items${active ? ' active' : ''}`}>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/occasions">OCCASIONS</Link>
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

export default CompactNavBar;
