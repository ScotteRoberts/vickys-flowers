import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CartIcon.css';

const CartIcon = props => {
  const [totalItems, setTotalItems] = useState(0);
  return (
    <div className="cart-icon-container">
      <span className="total-items">{totalItems}</span>
      <img src={require('../../assets/img/page-1-2.svg')} alt="Cart icon" />
    </div>
  );
};

CartIcon.propTypes = {};

export default CartIcon;
