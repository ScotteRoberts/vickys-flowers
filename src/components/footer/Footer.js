import React from 'react';
import { Link } from '@reach/router';
import './Footer.css';

/**
 * Footer component: contains navigation links
 * @component
 */
const Footer = () => (
  <footer className="footer">
    <nav>
      <h3>GET TO KNOW US</h3>
      <Link to="about">About Us</Link>
      <Link to="careers">Careers</Link>
      <Link to="media">Media</Link>
      <Link to="security-and-privacy">Security & Privacy</Link>
    </nav>
    <nav className="footer__nav">
      <h3>LEARN MORE ABOUT</h3>
      <Link to="blog">Blog</Link>
      <Link to="find-a-florist">Find a Florist</Link>
      <Link to="floral-tips-and-inspiration">Floral Tips & Inspiration</Link>
      <Link to="sitemap">Sitemap</Link>
    </nav>
    <nav className="footer__nav">
      <h3>SHOP VICKY'S</h3>
      <Link to="same-day-flower-delivery">Same-Day Flower Delivery</Link>
      <Link to="birthday-flowers">Birthday Flowers</Link>
      <Link to="funeral-and-sympathy-flowers">Funeral & Sympathy Flowers</Link>
      <Link to="international-flower-delivery">
        International Flower Delivery
      </Link>
    </nav>
  </footer>
);

export default Footer;
