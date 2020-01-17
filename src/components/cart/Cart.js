import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
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

const CartDecription = ({ totalAmount }) => (
  <div>
    TOTAL AMOUNT: <span>${totalAmount.toFixed(2)}</span>
    <span className="tabbed-vertical-separator">|</span>
  </div>
);

const CompactCartDescription = ({ totalAmount }) => (
  <div>
    TOTAL: <span>${totalAmount.toFixed(2)}</span>
  </div>
);

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [{ canDrop }, drop] = useDrop({
    accept: 'flower',
    drop: item => {
      console.log(item);
      setTotalAmount(totalAmount + item.price * item.quantity);
      console.log(totalAmount);
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
        <CartDecription totalAmount={totalAmount} />
      )}

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
