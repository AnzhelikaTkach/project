import React from 'react'
import { NavLink } from 'react-router-dom'

import "../styles/EmptyCart.scss"

function EmptyCart() {
  return (
    <div className='empty__cart'>
        <img className='empty__image' src="../images/cart-empty.png" alt="" />
        <h1 className='empty__h1'>Unfortunately your cart is empty</h1>
        <p className='empty__p'>Please add something to your cart</p>
        <NavLink to="/" className='empty__link'>
        Continue shopping!
        </NavLink>
    </div>
  )
}

export default EmptyCart