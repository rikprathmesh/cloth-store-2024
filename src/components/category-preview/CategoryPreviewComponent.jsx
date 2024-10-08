import React from 'react'
import ProductCardComponent from '../product-card/ProductCardComponent'
import './category-preview-styles.scss'
import { Link } from 'react-router-dom'

const CategoryPreviewComponent = ({title, products}) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link className='title' to={title}>{title.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {
            products.filter((_, index) => index < 4)
            .map((product) => (
                <ProductCardComponent key={product.id} product={product} />
            ))
        }
      </div>
    </div>
  )
}

export default CategoryPreviewComponent
