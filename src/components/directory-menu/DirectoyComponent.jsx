import React from 'react'
import CategoryItemComponent from '../category-item/CategoryItemComponent'
import './directory-styles.scss'

const DirectoyComponent = ({categories}) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItemComponent key={category.id} category={category} />
      ))}
    </div>
  )
}

export default DirectoyComponent
