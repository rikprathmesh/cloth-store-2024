import React, { useContext } from 'react'
import CategoryPreviewComponent from '../../components/category-preview/CategoryPreviewComponent';
import { CategoriesContext } from '../../context/CategoriesContext';


const CategoriesPreviewComponent = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
      <>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title]
          return <CategoryPreviewComponent key={title} title={title} products={products} />
        })}
      </>
    );
}

export default CategoriesPreviewComponent
