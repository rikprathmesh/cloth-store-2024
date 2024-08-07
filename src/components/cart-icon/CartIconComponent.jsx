import React, { useContext } from 'react'
import './cart-icon-styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/CartContext'

const CartIconComponent = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)

    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <div className='cart-icon-container' onClick={toogleIsCartOpen}>
      <ShoppingIcon className='shopping-icon'  />
      <span className='item-count'>10</span>
    </div>
  )
}

export default CartIconComponent
