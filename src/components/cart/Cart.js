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
      left: '18px',
      top: '13px',
    };
  } else if (numItems < 100) {
    return {
      fontSize: '14px',
      left: '15px',
      top: '15px',
    };
  } else {
    return {
      fontSize: '12px',
      left: '13px',
      top: '16px',
    };
  }
};

const Cart = props => {
  // FIXME: Figure out how to set this to decimal formatting
  const [totalAmount, setTotalAmount] = useState(35);
  const [totalItems, setTotalItems] = useState(1);
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
      {/* FIXME: Change the drop target to the div later */}
      <div className="cart-icon-container" ref={drop}>
        <div className={`drop-target${canDrop ? ' droppable' : ''}`} />
        <img
          src={require('../../assets/img/page-1-2.svg')}
          alt="Cart icon"
          className="cart-icon"
        />
        <span className="total-items" style={cartItemSize(totalItems)}>
          {totalItems}
        </span>
      </div>
    </div>
  );
};

//FIXME: Setup propTypes
Cart.propTypes = {};

export default Cart;
