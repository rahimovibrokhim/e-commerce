import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const HomeTop = () => {
  const [menuBar, setMenuBar] = useState(false);

  return (
    <div
      className="homeTop"
      style={{
        padding: "30px 0px",
        height: "90px",
        background: menuBar ? "#171c24" : "transparent ",
      }}
    >
      <div className="container header grid grid-cols-3 items-center">
        <nav>
          <div className="menu-icon float-right">
            <span
              onClick={() => setMenuBar(true)}
              className={`${menuBar ? "hide" : ""} fas fa-bars`}
            ></span>
          </div>
          <div className={`nav-items  flex ${menuBar ? "active" : ""}`}>
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
            </Link>
          </div>
          <div
            onClick={() => setMenuBar(false)}
            className={`${menuBar ? "show" : ""} cancel-icon float-right`}
          >
            <span className="fas fa-times"></span>
          </div>
        </nav>
        <a
          style={{ letterSpacing: "2px" }}
          href="#"
          className="logo uppercase text-2xl xl:text-3xl text-center font-semibold font-serif"
        >
          MI COLLECTION
        </a>
        <Link
          to="/cart"
          className="cart capitalize text-white text-lg text-right"
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </div>
  );
};

export default HomeTop;
