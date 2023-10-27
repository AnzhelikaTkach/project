import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../store/slices/productsSlice";
import { Link } from "react-router-dom";

function ProductsList({ products, selectedCategory, sortProducts }) {
  //  const products = useSelector((state) => state.products.products);
  const filteredProducts = useMemo(() => {
    if (selectedCategory !== "") {
      return products.filter(
        (product) => product.categoryId === selectedCategory
      );
    }
    return products;
  }, [selectedCategory]);

  const sorting = useMemo(() => {
    if (sortProducts === "lowToHigh") {
      return [...filteredProducts].sort((a, b) => a.price - b.price);
    }
    if (sortProducts === "highToLow") {
      return [...filteredProducts].sort((a, b) => b.price - a.price);
    }
    return filteredProducts;
  }, [filteredProducts, sortProducts]);

  return (
    <div>
      <div>
        {sorting.map((product) => (
          <Link
            to={`/products/${product?.id}`}
            className="product-item"
            key={product?.id}
          >
            {/* <div key={product.id}> */}
            <div className="product-item-img">
              <img
                // src={`http://localhost:3333/product_img/${product.id}`}
                src={`http://localhost:3333/${product.image}`}
                alt={product?.title}
                className="img-cover"
              />
              <button>Add to cart</button>
              {/* </div> */}
              <div className="product-item-body">
                <span className="product-title">{product?.title}</span>

                <div className="product-price">
                  <span className="fw-6 fs-16">{product?.price}$</span>
                  <div className="product-discount">
                    {product?.discont_price}
                    <span>%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
