import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getSingleProduct } from "../../../store/slices/productsSlice";
import { addToCart } from "../../../store/slices/cartSlice";
import "../../../styles/SingleProduct.scss";

function ViewSingleProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productSingle);
  const status = useSelector((state) => state.products.productSingleStatus);
  const error = useSelector((state) => state.products.productSingleError);
  const { id } = useParams();

  console.log("product", products);
  console.log("status", status);
  console.log("error", error);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id, dispatch]);

  if (status === "loading") {
    return (
      <img
        src="https://i.pinimg.com/originals/d9/f2/15/d9f21515b1e38d83e94fdbce88f623b6.gif"
        alt="loading"
      />
    );
  }

  if (status === "rejected") {
    return <h1>{error}</h1>;
  }

  return (
    <div className="product-container">
      {products.map((product) => (
        <>
          <div className="product_title-img">
            <h1 className="product__title">{product.title}</h1>
            <img
              src={`http://localhost:3333/${product.image}`}
              alt={product?.title}
              className="product__image"
            />
          </div>

          <div>
            <div className="product__price_container">
              {product.discont_price ? (
                <>
                  <span className="product__price">{product.price}$</span>
                  <span className="product__disc_price">
                    {product.discont_price}$
                  </span>

                  <span className="product__disc_percent">
                    {Math.floor(
                      ((product.price - product.discont_price) /
                        product.price) *
                        100
                    )}
                    %
                  </span>
                </>
              ) : (
                <span className="product__price">{product.price}$</span>
              )}
            </div>

            <button
              onClick={() => dispatch(addToCart(product))}
              className="product__btn"
            >
              To cart
            </button>
            <hr className="line"></hr>
            <h4 className="product__description_t">Description</h4>
            <p className="product__description">{product.description}</p>
          </div>
        </>
      ))}
    </div>
  );
}

export default ViewSingleProduct;
