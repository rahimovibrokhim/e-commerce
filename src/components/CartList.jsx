import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  decItemCount,
  incItemCount,
  removeItemFromCart,
} from "../store/slices/cart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CartList = () => {
  const { items } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleIncCount = (id) => {
    dispatch(incItemCount(id));
  };

  const handleDecCount = (id) => {
    dispatch(decItemCount(id));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div id="cart">
      <div className="container">
        <div className="top flex justify-between items-center">
          <h3 className="text-3xl font-semibold">Your Cart</h3>
          <div className="totalSumOfItems text-2xl">
            $
            {items
              .reduce((p, c) => p + c.count * c.product.price, 0)
              .toFixed(2)}
          </div>
        </div>
        <div className="cartList my-10">
          {items.length == 0 ? (
            <p className="text-center text-3xl text-red-900 font-semibold">
              Your cart is Empty
            </p>
          ) : (
            items.map(({ product, count }) => {
              return (
                <div
                  className="cartProduct flex items-center py-4"
                  key={product.id}
                >
                  <div className="left flex items-center">
                    <div className="productImg">
                      <img className="px-2" src={product.image} alt="Product image" />
                    </div>
                    <div className="productInfo flex flex-col gap-3 px-3">
                      <p className="text-xl lg:text-2xl xl:text-3xl font-semibold line-clamp-2">
                        {product.title}
                      </p>
                      <p className="text-base line-clamp-3">
                        {product.description}
                      </p>
                    </div>
                  </div>
                  <div className="right flex items-center justify-around">
                    <div className="productPrice">
                      <p className="text-center">${product.price.toFixed(2)}</p>
                    </div>
                    <div className="productCount flex justify-center items-center">
                      <p className="amount">{count}</p>
                      <div className="flex flex-col">
                        <button
                          onClick={() => handleIncCount(product.id)}
                          className="countBtn"
                        >
                          <FontAwesomeIcon icon={faChevronUp} />
                        </button>
                        <button
                          onClick={() => handleDecCount(product.id)}
                          disabled={count == 1}
                          className="countBtn"
                        >
                          <FontAwesomeIcon icon={faChevronDown} />

                        </button>
                      </div>
                    </div>
                    <div className="productTotalPrice">
                      <p className="text-center">
                        ${(product.price * count).toFixed(2)}
                      </p>
                    </div>
                    <div className="removeProductFromCart flex justify-center">
                      <button onClick={() => handleRemoveItem(product.id)}>
                        <i className="fa fa-solid fa-trash"></i>
                      </button>
                    </div>
                    <div className="removeItem-2 hidden">
                      <button onClick={() => handleRemoveItem(product.id)}>
                        <FontAwesomeIcon
                          style={{ fontSize: "24px" }}
                          icon={faXmark}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="bottom flex items-center justify-between">
          <Link to="/products" className="toShoppingBtn px-4 py-2 rounded-md">
            Back to Shopping
          </Link>
          <button
            disabled={items.length == 0}
            className="paymentBtn px-4 py-2 rounded-md"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
