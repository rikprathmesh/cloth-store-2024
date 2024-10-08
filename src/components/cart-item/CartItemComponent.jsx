import React from "react";
import "./cart-item-styles.scss";

const CartItemComponent = ({ cartItem }) => {
  console.log(cartItem, 'cartitem');
  
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItemComponent;
