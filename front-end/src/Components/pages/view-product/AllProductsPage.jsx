import React, { useState } from "react";
import { useEffect } from "react";
import "../../../styles/AllCat.scss";
import "../../../styles/Products.scss";
import { useSelector, useDispatch } from "react-redux";

import FilterProducts from "../../FilterProducts";
import SingleProduct from "../../SingleProduct";
import { getProducts } from "../../../store/slices/productsSlice";

// import "../../styles/Products.module.css";
import "../../../styles/ViewAllProducts.scss";

function AllProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  // const [filteredProducts, setFilteredProducts] = useState(products);
  // const [priceFrom, setPriceFrom] = useState("");
  // const [priceTo, setPriceTo] = useState("");
  // const [showDiscount, setShowDiscount] = useState(false);
  // const [sortType, setSortType] = useState("");

  // useEffect(() => {
  //   if (status === "fulfilled") {
  //     setFilteredProducts(products);
  //   }
  // }, [status]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  console.log(products);

  if (status === "fulfilled") {
    return (
      <div>
        <h1 className="category__title">All Products</h1>

        <FilterProducts
          products={products}
          setFilteredProducts={setFilteredProducts}
          status={status}
        />
        <div className="products__container">
          {filteredProducts.map((product) => (
            <div className="product_items" key={product.id}>
              <SingleProduct product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AllProductsPage;
