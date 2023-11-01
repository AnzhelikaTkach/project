import { NavLink } from "react-router-dom";

import "../styles/Navbar.scss";

function Navbar() {
  return (
    <header className="header ">
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

        <div className="">
          <NavLink to="/cart">
            <img src="../images/shop-bag.png" alt="shopping bag" />
          </NavLink>

        </div>
      </div>
    </header>
  );
}

export default Navbar;
