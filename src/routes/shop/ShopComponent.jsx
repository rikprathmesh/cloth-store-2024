import {Routes, Route} from 'react-router-dom'
import CategoriesPreviewComponent from '../categories-preview/CategoriesPreviewComponent'
import CategoryComponent from '../category/CategoryComponent';
import "./shop-styles.scss";

const ShopComponent = () => {

  return (
    <Routes>
      <Route index element={<CategoriesPreviewComponent />} />
      <Route path=":category" element={<CategoryComponent />} />
    </Routes>
  );
};

export default ShopComponent;
