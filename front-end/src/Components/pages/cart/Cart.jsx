import React from "react";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../../store/slices/cartSlice";
import { useDispatch } from "react-redux";

function Cart({ id, image, title, price, quantity = 0 }) {
  const dispatch = useDispatch();


  return (
    <div className="cart">
      <img
        className="cart__image"
        src={`http://localhost:3333/${image}`}
        alt="item"
      />
      <div className="cart__info">
        <p className="cart__title">{title}</p>
        <p className="cart__price">{price}$</p>
        <div className="cart__incrDec">
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <button
          className="cart__removeButton"
          onClick={() => dispatch(removeFromCart(id))}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Cart;
