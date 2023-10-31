import { useDispatch } from "react-redux";

import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../../store/slices/cartSlice";
import "../../../styles/CartItem.scss";

function Cart({ id, image, title, price, discount, quantity = 0 }) {
  const dispatch = useDispatch();

  return (
    <>
      <div class="line"></div>
      <div className="cart">
        <div>
          <img
            className="cart__image"
            src={`http://localhost:3333/${image}`}
            alt="item"
          />
        </div>

        <div className="cart__info">
          <p className="cart__title">{title}</p>

          <div className="cart__incrDec">
            <button onClick={() => dispatch(decrementQuantity(id))}>
              <div class="line-minus"></div>
            </button>
            <p>{quantity}</p>
            <button
              className="plus"
              onClick={() => dispatch(incrementQuantity(id))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="15"
                viewBox="0 0 18 18"
                fill="none"
              >
                <rect y="8" width="18" height="2" fill="black" />
                <rect
                  x="8"
                  y="18"
                  width="18"
                  height="2"
                  transform="rotate(-90 8 18)"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <p className="cart__price">{price}$</p>
        </div>

        {discount ? (
          <div>
            <p className="cart__disc">{discount}$</p>
          </div>
        ) : (
          <div></div>
        )}

        <div>
          <button
            className="cart__removeButton"
            onClick={() => dispatch(removeFromCart(id))}
          >
            X
          </button>
        </div>
      </div>
      <div class="line"></div>
    </>
  );
}

export default Cart;
