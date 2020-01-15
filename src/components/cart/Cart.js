import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Cart.css';

import CartIcon from './CartIcon';

const Cart = props => {
  // FIXME: Figure out how to set this to decimal formatting
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <div className="cart">
      TOTAL AMOUNT: $<span>{totalAmount}</span> | <CartIcon />
    </div>
  );
};

//FIXME: Setup propTypes
Cart.propTypes = {};

export default Cart;
