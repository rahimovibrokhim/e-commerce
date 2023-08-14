import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuBar, setMenuBar] = useState(false);
  const { cart } = useSelector((store) => store);

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
                onClick={() => setMenuBar(true)}
                className={`${menuBar ? "hide" : ""} fas fa-bars`}
              ></span>
            </div>
            <div
              className={`nav-items flex justify-center ${
                menuBar ? "active" : ""
              }`}
            >
              <Link
                onClick={() => setMenuBar(false)}
                to="/"
                className="nav-item capitalize text-lg text-white hover:scale-x-110"
              >
                Home
              </Link>
              <Link
                onClick={() => setMenuBar(false)}
                to="/products"
                className="nav-item capitalize text-lg text-white hover:scale-x-110"
              >
                Products
              </Link>
              <Link
                onClick={() => setMenuBar(false)}
                to="/about"
                className="nav-item capitalize text-lg text-white hover:scale-x-110"
              >
                About
              </Link>
              <Link
                onClick={() => setMenuBar(false)}
                to="/cart"
                className="nav-cart capitalize text-white text-lg"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                <p className="inline-block bg-red-700 px-4 rounded-md ms-2">
                  {cart.items.length}
                </p>
              </Link>
            </div>
            <div
              onClick={() => setMenuBar(false)}
              className={`${menuBar ? "show" : ""} cancel-icon float-right`}
            >
              <span className="fas fa-times"></span>
            </div>
          </nav>
          <Link
            to="/cart"
            className="cart capitalize text-white text-lg text-right"
          >
            <FontAwesomeIcon icon={faCartShopping} />
            <p className="inline-block bg-red-700 px-3 py-1 rounded-md ms-3">
              {cart.items.length}
            </p>
          </Link>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
