import React, { useContext } from 'react'
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon-styles'
import { CartContext } from '../../context/CartContext'

const CartIconComponent = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)

    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
      <ShoppingIcon className='shopping-icon'  />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIconComponent
