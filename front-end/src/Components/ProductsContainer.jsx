import React, { useState } from "react";
import { getProducts } from "../store/slices/productsSlice";
import { useSelector } from "react-redux";
import ProductsList from "./ProductsList";

function ProductsContainer() {
  const products = useSelector((state) => state.products.products);
  console.log("products", products);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortProducts, setSortProducts] = useState("");

  return (
    <div>
      <div>
        <label htmlFor="">
          Category:
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothes">Clothes</option>
            <option value="Books">Books</option>
          </select>
        </label>
      </div>

      <div>
        <label htmlFor="">
          Sort:
          <select
            value={sortProducts}
            onChange={(e) => setSortProducts(e.target.value)}
          >
            <option value="">-</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </label>
      </div>
      <ProductsList
        products={products}
        selectedCategory={selectedCategory}
        sortProducts={sortProducts}
      />
    </div>
  );
}

export default ProductsContainer;
