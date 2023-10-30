import React from 'react'
import { NavLink } from 'react-router-dom'

function EmptyCart() {
  return (
    <div>
        <img src="../images/cart-empty.png" alt="" />
        <h1>Unfortunately your cart is empty</h1>
        <p>Please add something to your cart</p>
        <NavLink to="/">
        Continue shopping!
        </NavLink>
    </div>
  )
}

export default EmptyCart