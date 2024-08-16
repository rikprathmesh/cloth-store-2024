import React, { useContext } from "react";
import CheckoutItemComponent from "../../components/checkout-item/CheckoutItemComponent";
import { CartContext } from "../../context/CartContext";
import "./checkout-styles.scss";

const CheckoutComponent = () => {
  const { cartItems, cartTotal } =
    useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems && cartItems.length > 0 ? (
        cartItems.map((cartItem) => (
          <CheckoutItemComponent key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <p>No items in the cart</p>
      )}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default CheckoutComponent;
