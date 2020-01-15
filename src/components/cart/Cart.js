import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import './Cart.css';

const Cart = props => {
  // FIXME: Figure out how to set this to decimal formatting
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [{ canDrop }, drop] = useDrop({
    accept: 'flower',
    drop: item => {
      console.log(item);
      setTotalAmount(totalAmount + item.price * item.quantity);
      setTotalItems(totalItems + item.quantity);
    },
    collect: monitor => ({ canDrop: !!monitor.canDrop() }),
  });

  return (
    <div className="cart">
      TOTAL AMOUNT: $<span>{totalAmount.toFixed(2)}</span> |{' '}
      <div ref={drop} className="cart-icon-container">
        <span className="total-items">{totalItems}</span>
        <img
          src={require('../../assets/img/page-1-2.svg')}
          alt="Cart icon"
          className={`cart-icon${canDrop ? '--droppable' : ''}`}
        />
      </div>
    </div>
  );
};

//FIXME: Setup propTypes
Cart.propTypes = {};

export default Cart;
