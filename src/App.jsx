import { } from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
