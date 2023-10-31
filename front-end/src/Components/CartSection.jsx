import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./pages/cart/Cart";
import Form from "./Form";
import { NavLink } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import "../styles/Cart.scss";
import "../styles/Discount.scss";
// import "../../../styles/ModalWindow.scss";

function CartSection() {
  const cart = useSelector((state) => state.cart.cart);
  console.log("cart", cart);
  const btnTitle = "Order";
  const firstSubtitle = "We received your order!";
  const secondSubtitle =
    "We will ship the listed items as quickly as possible!";
  // const quantity = useSelector((state)=> state.cart.cart[0].quantity)
  // console.log("quan",quantity);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      Math.floor((totalPrice += item.price * item.quantity));
    });
    return { totalPrice, totalQuantity };
  };

  // const emptyCartMsg = <h4 className="empty">Your cart is empty!</h4> ;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  return (
    <div className="cart-container">
      <div className="cart-container__items">
        <h3 className="cart-container__h3">Shopping Cart</h3>

        <NavLink to="/" className="cart-container__link">
          Back to the store
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M4.49653 1.19763C4.37465 1.19763 4.26567 1.27146 4.21879 1.38396C4.17309 1.49763 4.20004 1.62654 4.28793 1.71208L10.0758 7.49998L4.28793 13.2879C4.20942 13.3629 4.17778 13.4754 4.2059 13.5797C4.23286 13.6851 4.31489 13.7672 4.42036 13.7941C4.52465 13.8222 4.63715 13.7906 4.71215 13.7121L10.7122 7.71208C10.8293 7.5949 10.8293 7.40505 10.7122 7.28787L4.71215 1.28787C4.6559 1.22927 4.57856 1.19763 4.49653 1.19763Z"
              fill="black"
            />
          </svg>
        </NavLink>
        <div className="cart-container__products">
          {cart.length === 0 ? (
            <EmptyCart />
          ) : (
            cart.map((item) => (
              <Cart
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                discount={item.discont_price}
                price={item.price}
                quantity={item.quantity}
              />
            ))
          )}
        </div>
      </div>

      <div className="cart-container__left">
        <h4 className="cart-container__h4">Order details</h4>
        <div>
          <p className="cart-container__p">
            Total ({getTotal().totalQuantity} items){" "}
            <span>${getTotal().totalPrice}</span>
          </p>
        </div>


       
      

      
       
       
        <Form
            url={"http://localhost:3333/order/send"}
            firstSubtitle={firstSubtitle}
            secondSubtitle={secondSubtitle}
            btnTitle={btnTitle}
          />
     
      
      </div>
    </div>
  );
}

export default CartSection;
