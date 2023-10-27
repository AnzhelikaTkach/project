import React, { useEffect } from "react";
import "./App.scss";
import { useDispatch } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Home,
  Categories,
  ViewCategoryProducts,
  ViewSingleProduct,
  Error,
  Products,
  Cart,
} from "./Components/pages/index";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import { getAllCategories } from "./store/slices/categoriesSlice";
import { getProducts } from "./store/slices/productsSlice";
import ProductsWithSalePage from "./Components/pages/view-product/ProductsWithSalePage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/all" element={<Categories />} />
          <Route
            path="/categories/:categoryKey"
            element={<ViewCategoryProducts />}
          />
          <Route path="/products/all" element={<Products />} />
          <Route path="/products/:id" element={<ViewSingleProduct />} />
          <Route path="/products/sale" element={<ProductsWithSalePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

