import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDrag, DragPreviewImage } from 'react-dnd';
import './ShopItem.css';

/** Array of Integers from 1 - 20 */
const itemQuantities = [...Array(21).keys()].slice(1);

/**
 * ShopItem component: Card-like representation of a single shop item
 * @param {*} props properties
 * @param {Object} props.item Shopping item details
 * @component
 */
const ShopItem = ({ item, handleQuantityRandomization }) => {
  const { title, image, price, quantity } = item;
  const [currQuantity, setCurrQuantity] = useState(quantity);
  console.log(currQuantity);

  useEffect(() => setCurrQuantity(quantity), [quantity]);

  // DEV: Dragging hook to monitor the draggable item
  const [, dragRef, preview] = useDrag({
    item: { type: 'flower', price, quantity: currQuantity },
    end: (_, monitor) => {
      // Drop was successful, randomize the next quantity for the drop...
      if (monitor.didDrop()) {
        handleQuantityRandomization();
      }
    },
  });
  const handleQuantityChange = event =>
    setCurrQuantity(parseInt(event.target.value, 10));
  return (
    <div className="shop-item">
      <DragPreviewImage connect={preview} src={image.src} />
      <img
        ref={dragRef}
        src={image.src}
        // FIXME: Figure out how to spread the array instead of hard coding the indicies
        srcSet={(image.srcSet[0], image.srcSet[1])}
        alt={image.alt}
      />
      <p className="item-title">{title}</p>
      <p className="item-price">${price.toFixed(2)}</p>
      <select
        value={currQuantity}
        onChange={handleQuantityChange}
        className="item-quantity"
      >
        {/* DEV: Dynamically populate the number of options */}
        {itemQuantities.map(itemQuantity => (
          <option key={itemQuantity} value={itemQuantity}>
            {itemQuantity}
          </option>
        ))}
      </select>
    </div>
  );
};

ShopItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      srcSet: PropTypes.arrayOf(PropTypes.string).isRequired,
      alt: PropTypes.string,
    }).isRequired,
  }).isRequired,
  handleQuantityRandomization: PropTypes.func.isRequired,
};

export default ShopItem;
