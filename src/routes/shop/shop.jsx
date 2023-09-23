import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./product";
import "./shop.css";

function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Big Bag</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((item) => (
          <Product data={item} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
