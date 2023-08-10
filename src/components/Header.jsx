import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  const [menuBar, setMenuBar] = useState(false);

  const closeMenuBar = () => {
    setMenuBar(false);
  };

  const openMenuBar = () => {
    setMenuBar(true);
  };

  return (
    <>
      <header>
        <div className="container header grid grid-cols-3 items-center">
          <a
            href="#"
            className="logo uppercase text-2xl font-semibold font-serif"
          >
            MI COLLECTION
          </a>
          <nav>
            <div className="menu-icon float-right">
              <span
                onClick={openMenuBar}
                className={`${menuBar ? "hide" : ""} fas fa-bars`}
              ></span>
            </div>
            <div
              className={`nav-items flex justify-center ${
                menuBar ? "active" : ""
              }`}
            >
              <Link
                onClick={closeMenuBar}
                to="/"
                className="nav-item capitalize text-lg text-white hover:scale-x-110"
              >
                Home
              </Link>
              <Link
                onClick={closeMenuBar}
                to="/products"
                className="nav-item capitalize text-lg text-white hover:scale-x-110"
              >
                Products
              </Link>
              <Link
                onClick={closeMenuBar}
                to="/about"
                className="nav-item capitalize text-lg text-white hover:scale-x-110"
              >
                About
              </Link>
              <Link
                onClick={closeMenuBar}
                to="/cart"
                className="nav-cart capitalize text-white text-lg"
              >
                Cart
              </Link>
            </div>
            <div
              onClick={closeMenuBar}
              className={`${menuBar ? "show" : ""} cancel-icon float-right`}
            >
              <span className="fas fa-times"></span>
            </div>
          </nav>
          <Link
            to="/cart"
            className="cart capitalize text-white text-lg text-right"
          >
            Cart
          </Link>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
