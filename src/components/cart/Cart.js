import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Cart.css';

const Cart = props => {
  // FIXME: Figure out how to set this to decimal formatting
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  return (
    <div className="cart">
      TOTAL AMOUNT: $<span>{totalAmount}</span> |{' '}
      <div className="cart-icon-container">
        <span className="total-items">{totalItems}</span>
        <img src={require('../../assets/img/page-1-2.svg')} alt="Cart icon" />
      </div>
    </div>
  );
};

//FIXME: Setup propTypes
Cart.propTypes = {};

export default Cart;
