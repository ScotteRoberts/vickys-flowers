import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import './Cart.css';

/**
 * Dynamically returns an object of style properties based on the number of cart items.
 * @warning Relies on the icon being the same size
 * @param {Number} numItems The number of cart items
 * @returns Style object
 */
const cartItemSize = numItems => {
  if (numItems < 10) {
    return {
      fontSize: '16px',
      left: '15px',
      top: '4px',
    };
  } else if (numItems < 100) {
    return {
      fontSize: '14px',
      left: '12px',
      top: '5px',
    };
  } else {
    return {
      fontSize: '12px',
      left: '10px',
      top: '6px',
    };
  }
};

const Cart = props => {
  // FIXME: Figure out how to set this to decimal formatting
  const [totalAmount, setTotalAmount] = useState(35);
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
      <div>
        TOTAL AMOUNT: $<span>{totalAmount.toFixed(2)}</span>
        <span className="tabbed-vertical-separator">|</span>
      </div>
      <div ref={drop} className="cart-icon-container">
        <span className="total-items" style={cartItemSize(totalItems)}>
          {totalItems}
        </span>
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
