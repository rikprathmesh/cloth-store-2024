import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {CartDropdownContainer, EmptyMessage, CartItems} from "./cart-dropdown-styles";
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
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (
            cartItems.map((item) => (
              <CartItemComponent key={item.id} cartItem={item} />
            ))
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
        }
        
      </CartItems>
      <ButtonComponent onClick={gotoCheckoutHandler}>Go To Checkout</ButtonComponent>
    </CartDropdownContainer>
  );
};

export default CartDropdownComponent;
