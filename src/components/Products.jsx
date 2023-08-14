import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cart";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [empty, setEmpty] = useState(false);
  const input = useRef("");
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const formSubmit = (e) => {
    e.preventDefault();

    let searchedProducts = [];

    products.forEach((product) => {
      if (
        product.title.toLowerCase().includes(input.current.value.toLowerCase())
      )
        searchedProducts.push(product);
    });

    if (searchedProducts.length != 0) {
      setFilter(searchedProducts);
      setEmpty(false);
    } else setEmpty(true);

    input.current.value = "";
  };

  useEffect(() => {
    const getProducts = async () => {
      let res = await fetch("https://fakestoreapi.com/products");
      setProducts(await res.clone().json());
      setFilter(await res.json());
    };
    getProducts();
  }, []);

  const filterProducts = (type) => {
    const filteredList = products.filter((product) => product.category == type);
    setFilter(filteredList);
  };

  return (
    <div id="products" className="container">
      <form onSubmit={formSubmit} className="flex justify-center pt-28">
        <input
          className="inputFinder w-full sm:w-2/4 mb-10"
          type="text"
          placeholder="Search..."
          ref={input}
        />
      </form>

      <div className="cloth-type flex content-center justify-center flex-wrap gap-2">
        <button onClick={() => setFilter(products)}>All</button>
        <button onClick={() => filterProducts("men's clothing")}>
          men's clothing
        </button>
        <button onClick={() => filterProducts("women's clothing")}>
          Women's clothing
        </button>
        <button onClick={() => filterProducts("electronics")}>
          electronics
        </button>
        <button onClick={() => filterProducts("jewelery")}>jewelery</button>
      </div>

      <div
        className={`${
          empty ? "hidden" : "grid"
        } products mb-14 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`}
      >
        {filter != undefined ? (
          filter.map((product) => {
            return (
              <div
                className="card px-4 py-5 rounded-2xl text-center"
                key={product.id}
              >
                <img src={product.image} alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title line-clamp-1 mt-4 text-2xl">
                    {product.title}
                  </h5>
                  <p className="card-text mt-3 text-xl font-medium">
                    ${product.price}
                  </p>
                  <div className="flex items-center  justify-around mt-4 gap-2">
                    <Link
                      to={`/products/${product.id}`}
                      className="readDetailsBtn w-1/2  py-2  text-lg tracking-wider rounded-lg bg-green-800 text-white"
                    >
                      Read More
                    </Link>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="buyBtn w-1/2 py-2  text-lg tracking-wider rounded-lg text-white"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </div>

      <p
        className={`${
          empty ? "block" : "hidden"
        } notFound text-4xl mt-8 text-red-700 font-semibold text-center`}
      >
        No results
      </p>
    </div>
  );
};

export default Products;
