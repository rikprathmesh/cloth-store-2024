import React from 'react'
import './product-card-styles.scss'
import ButtonComponent from '../button/ButtonComponent'

const ProductCardComponent = ({product}) => {
    const {name, price, imageUrl} = product
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <ButtonComponent buttonType='inverted'>Add To Cart</ButtonComponent>
    </div>
  )
}

export default ProductCardComponent
