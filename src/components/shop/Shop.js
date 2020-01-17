import React from 'react';
import './Shop.css';

import flowerItems from './flowerData.js';
import ShopItem from '../shop-item';

/**
 * Shop component: Displays list of shop items
 * @component
 */
const Shop = () => (
  <main className="shop">
    <h1 className="title">Top Products</h1>
    <p className="subtitle">
      To add desired products to the cart, simply drag a product image to the
      cart icon found at the top right of the page.
    </p>
    <section>
      {Object.values(flowerItems).map((item, i) => (
        <ShopItem key={i} item={item} />
      ))}
    </section>
  </main>
);

export default Shop;
