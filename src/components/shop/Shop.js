import React, { useState } from 'react';
import './Shop.css';

import flowerData from './flowerData.js';
import ShopItem from '../shop-item';

/**
 * Generates a random number between/including min and max
 * @param {Number} min minimum value (included)
 * @param {Number} max maximum value (included)
 * @returns an integer
 */
const getRandomInt = (min, max) => Math.floor(Math.random() * max + min);

// DEV: Convert flowerData to an array and add the randomized quantities.
const flowerItems = Object.values(flowerData);
flowerItems.forEach(item => {
  item.quantity = getRandomInt(1, 20);
});

/**
 * Shop component: Displays list of shop items
 * @component
 */
const Shop = () => {
  const [shopItems, setShopItems] = useState(flowerItems);

  // DEV: Takes all items and gives them a new random quantity.
  const handleQuantityRandomization = () => {
    const tempShopItems = [...shopItems];
    tempShopItems.forEach(item => {
      item.quantity = getRandomInt(1, 20);
    });
    setShopItems(tempShopItems);
  };

  return (
    <div className="shop">
      <h1 className="title">Top Products</h1>
      <p className="subtitle">
        To add desired products to the cart, simply drag a product image to the
        cart icon found at the top right of the page.
      </p>
      <section>
        {Object.values(flowerItems).map((item, i) => (
          <ShopItem
            key={i}
            item={item}
            handleQuantityRandomization={handleQuantityRandomization}
          />
        ))}
      </section>
    </div>
  );
};

export default Shop;
