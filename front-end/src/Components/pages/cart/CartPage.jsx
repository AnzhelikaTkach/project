import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";

function CartPage() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      Math.floor(totalPrice += item.price * item.quantity)
    })
    return {totalPrice, totalQuantity}
  }
//   const shoppingCart = JSON.parse(localStorage.getItem("cart") || []);
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
})


  return (
    <div>
      <h3>Shopping Cart</h3>
      {cart.map((item) => (
        <Cart
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
      <div><p className="total__p">
  total ({getTotal().totalQuantity} items) 
  : <span>${getTotal().totalPrice}</span>
</p></div>
    </div>
  );
}




export default CartPage;
