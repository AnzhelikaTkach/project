import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { addToCart } from "../store/slices/cartSlice";
import "../styles/Products.scss";

function SingleProduct({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const discountPercent = Math.floor(
    ((product.price - product.discont_price) / product.price) * 100
  );

  function handleCartAdd() {
    dispatch(addToCart(product));
  }
  return (
    <div className="product">
      <img
        onClick={() => navigate(`/products/${product.id}`)}
        src={`http://localhost:3333/${product.image}`}
        alt={product?.title}
        className="product__img"
      />
      <button
        className="product__addToCart"
        onClick={() => handleCartAdd(product)}
      >
        Add to cart
      </button>
      <div>
        {product.discont_price ? (
          <div className="product__price_container">
            <span className="product__price">{product.price}$</span>
            <span className="product__disc_price">
              {product.discont_price}$
            </span>

            <span className="product__disc_percent">{discountPercent}%</span>
          </div>
        ) : (
          <p className="product__price">{product.price}$</p>
        )}
      </div>
      <Link to={`/products/${product.id}`}>
        <p className="product__title">{product.title}</p>
      </Link>
    </div>
  );
}

export default SingleProduct;
