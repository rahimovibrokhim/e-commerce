import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [empty, setEmpty] = useState(false);
  const input = useRef("");

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
    <div className="container">
      <form onSubmit={formSubmit} className="flex justify-center">
        <input
          className="inputFinder w-full sm:w-2/4 my-10"
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
        } products my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`}
      >
        {filter != undefined ? (
          filter.map((product) => {
            return (
              <div
                className="card p-6 rounded-2xl text-center"
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
                  <Link
                    to="/product"
                    className="buyBtn inline-block mt-6 sm:mt-8 px-10 py-1 text-xl tracking-wider rounded-lg hover:bg-green-800 hover:text-white text-green-800 font-medium"
                  >
                    Buy
                  </Link>
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
