import React from 'react';
import PropTypes from 'prop-types';
import './ShopItem.css';

const itemQuantities = [...Array(21).keys()].slice(1);

const ShopItem = ({ item }) => {
  const { title, image, price } = item;
  return (
    <div className="shop-item">
      <img
        src={image.src}
        // FIXME: Figure out how to spread the array instead of hard coding the indicies
        srcSet={(image.srcSet[0], image.srcSet[1])}
        alt="Sunflower Melody item"
      />
      <p className="item-title">{title}</p>
      <p className="item-price">${price}</p>
      <select className="item-quantity">
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
    }).isRequired,
  }).isRequired,
};

export default ShopItem;
