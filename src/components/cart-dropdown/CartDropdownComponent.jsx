import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown-styles.scss";
import ButtonComponent from "../button/ButtonComponent";
import { CartContext } from "../../context/CartContext";
import CartItemComponent from "../cart-item/CartItemComponent";

const CartDropdownComponent = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate()

  const gotoCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItemComponent key={item.id} cartItem={item} />
        ))}
      </div>
      <ButtonComponent onClick={gotoCheckoutHandler}>Go To Checkout</ButtonComponent>
    </div>
  );
};

export default CartDropdownComponent;
