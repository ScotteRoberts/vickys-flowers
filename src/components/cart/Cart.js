import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { useDrop } from 'react-dnd';
import './Cart.css';

// Images
const cartImage = require('../../assets/img/page-1-2.svg');

/**
 * Detailed Description on the cart details. Designed to fit in the header.
 * @param {*} props Properties
 * @param {Number} props.totalAmount Shopping cart total in $
 * @component
 */
const CartDescription = ({ totalAmount }) => (
  <div>
    TOTAL AMOUNT: <span>${totalAmount.toFixed(2)}</span>
    <span className="tabbed-vertical-separator">|</span>
  </div>
);
CartDescription.propTypes = {
  totalAmount: PropTypes.number.isRequired,
};

/**
 * Compact Description on the cart details. Designed to fit in a smaller header.
 * @param {*} props Properties
 * @param {Number} props.totalAmount Shopping cart total in $
 * @component
 */
const CompactCartDescription = ({ totalAmount }) => (
  <div>
    TOTAL: <span>${totalAmount.toFixed(2)}</span>
  </div>
);
CompactCartDescription.propTypes = {
  totalAmount: PropTypes.number.isRequired,
};

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
  }
  if (numItems < 100) {
    return {
      fontSize: '14px',
      left: '15px',
      top: '15px',
    };
  }
  return {
    fontSize: '12px',
    left: '13px',
    top: '16px',
  };
};

/**
 * Minimal shopping cart component
 * @component
 */
const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [{ canDrop }, drop] = useDrop({
    accept: 'flower',
    // DEV: On a successful drop, update the price and quantity
    drop: item => {
      setTotalAmount(totalAmount + item.price * item.quantity);
      setTotalItems(totalItems + item.quantity);
    },
    collect: monitor => ({ canDrop: !!monitor.canDrop() }),
  });
  const isCompact = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <div className="cart">
      {isCompact ? (
        <CompactCartDescription totalAmount={totalAmount} />
      ) : (
        <CartDescription totalAmount={totalAmount} />
      )}

      {/* DEV: An overlaid container that has the shopping cart details stacked */}
      <div className="cart-icon-container" ref={drop}>
        <div className={`drop-target${canDrop ? ' droppable' : ''}`} />
        <img src={cartImage} alt="Shopping Cart Icon" className="cart-icon" />
        {/* DEV: Applies number sizing dynamically */}
        <span className="total-items" style={cartItemSize(totalItems)}>
          {totalItems}
        </span>
      </div>
    </div>
  );
};

export default Cart;
