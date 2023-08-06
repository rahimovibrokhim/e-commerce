import {} from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
