import React from "react";
import "../styles/Navbar.scss";
// import { Cart } from "../view";
// import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  // const [menuClass, setMenuClass] = useState("menu hidden")
  //   const [isMenuClicked, setIsMenuClicked] = useState(false);

  //   const updateMenu = () => {
  //     if(!isMenuClicked) {

  //         setMenuClass("menu visible")
  //     }
  //     else {
  //         setMenuClass("menu hidden")
  //     }
  //     setIsMenuClicked(!isMenuClicked)
  // }
  return (
    <header className="header container header-nav">
      <div className="header__logo-btn">
        <NavLink to="/">
          <img className="logo" src="../images/icon.png" alt="iconImage" />
        </NavLink>

        <NavLink
          to="/categories/all"
          className={({ isActive }) =>
            isActive ? "header-btn" : "header-btn btn-primary"
          }
        >
          Catalog
          {/* <button className="header-btn btn-primary">Catalog</button> */}
        </NavLink>
      </div>

      <div className="header__links-basket">
        <div>
          <nav className="header__links">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active links" : "navbar-clear-btn links"
              }
            >
              Main Page
            </NavLink>
            <NavLink
              to="/products/all"
              className={({ isActive }) =>
                isActive ? "active links" : "navbar-clear-btn links"
              }
            >
              All products
            </NavLink>
            <NavLink to="/products/sale" className="navbar-clear-btn links">
              All sales
            </NavLink>
          </nav>
        </div>

        <div className="menu">
          <NavLink to="/cart">
            <img src="../images/shop-bag.png" alt="shopping bag" />
          </NavLink>

          <img
            className="burger "
            src="../images/menu_hamburger_burger.png"
            alt="menu icon"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
