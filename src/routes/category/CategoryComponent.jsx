import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/CategoriesContext";
import "./category-styles.scss";
import ProductCardComponent from "../../components/product-card/ProductCardComponent";

const CategoryComponent = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCardComponent key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default CategoryComponent;
