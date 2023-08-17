import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
    };
    getProduct();
  }, []);

  return (
    <div>
      {product.length === 0 ? <div className="flex">
        <div className="loader ms-auto me-auto"></div>
      </div> :
        <div id="product" className="container">
          <div className="product pt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-5">
            <div className="left flex justify-center my-auto">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="right flex flex-col justify-center content-center">
              <h5 className="uppercase text-2xl text-zinc-500 font-semibold">
                {product.category}
              </h5>
              <p className="text-2xl sm:text-3xl mt-4 font-medium">
                {product.title}
              </p>
              <p className="text-xl font-bold my-4">
                Rating: {product?.rating?.rate}
              </p>
              <p className="text-3xl sm:text-4xl font-bold">$ {product.price}</p>
              <p className="text-lg mt-5 text-zinc-500">{product.description}</p>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Product;
