import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDrag, DragPreviewImage } from 'react-dnd';
import './ShopItem.css';

/** Array of Integers from 1 - 20 */
const itemQuantities = [...Array(21).keys()].slice(1);

/**
 * Generates a random number between/including min and max
 * @param {Number} min minimum value (included)
 * @param {Number} max maximum value (included)
 * @returns an integer
 */
const getRandomInt = (min, max) => Math.floor(Math.random() * max + min);

/**
 * ShopItem component: Card-like representation of a single shop item
 * @param {*} props properties
 * @param {Object} props.item Shopping item details
 * @component
 */
const ShopItem = ({ item }) => {
  const { title, image, price } = item;
  const [currQuantity, setCurrQuantity] = useState(getRandomInt(1, 20));

  // DEV: Dragging hook to monitor the draggable item
  const [, dragRef, preview] = useDrag({
    item: { type: 'flower', price, quantity: currQuantity },
    end: (_, monitor) => {
      // Drop was successful, randomize the next quantity for the drop...
      if (monitor.didDrop()) {
        setCurrQuantity(getRandomInt(1, 20));
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
        {itemQuantities.map(quantity => (
          <option key={quantity} value={quantity}>
            {quantity}
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
};

export default ShopItem;
