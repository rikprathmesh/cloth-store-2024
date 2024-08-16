import React, { useContext } from "react";
import "./product-card-styles.scss";
import ButtonComponent from "../button/ButtonComponent";
import { CartContext } from "../../context/CartContext";

const ProductCardComponent = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComponent buttonType="inverted" onClick={addProductToCart}>
        Add To Cart
      </ButtonComponent>
    </div>
  );
};

export default ProductCardComponent;
