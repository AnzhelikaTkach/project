import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import SingleProduct from "../../SingleProduct";
import { getSingleProduct } from "../../../store/slices/productsSlice";
import { addToCart } from "../../../store/slices/cartSlice";

function ViewSingleProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productSingle);
  const status = useSelector((state) => state.products.productSingleStatus);
  const error = useSelector((state) => state.products.productSingleError);
  // console.log(products);
  const { id } = useParams();

  console.log("product", products);
  console.log("status", status);
  console.log("error", error);

  // const product = products.find((product) => product.id === id);

  // if (!product) {
  //   return <Navigate to="*"/>
  // }
  // const discountPercent = Math.floor(
  //   ((product.price - products.discont_price) / products.price) * 100
  // );
  function handleCartAdd() {
    dispatch(addToCart(products));
  }

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
    <div>
      {products.map((product) => (
        <>
          <h1>{product.title}</h1>
          <img
            src={`http://localhost:3333/${product.image}`}
            alt={product?.title}
            className="product__img"
          />
          <div>
            {product.discont_price ? (
              <>
                <p>{product.discont_price}$</p>
                <p>{product.price}$</p>
                <p>
                  {Math.floor(
                    ((product.price - product.discont_price) / product.price) *
                      100
                  )}
                  %
                </p>
              </>
            ) : (
              <p>{product.price}</p>
            )}
          </div>

          <p>{product.description}</p>
          <button onClick={() => handleCartAdd(product)}>Add to cart</button>
        </>
      ))}
    </div>
  );
}

export default ViewSingleProduct;
