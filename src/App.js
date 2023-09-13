import React, { useState, useEffect } from "react";
import "./App.css";

import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);

    const initialTotal = calculateTotal(storedProducts);
    setTotal(initialTotal);
  }, []);

  const calculateTotal = (productList) => {
    return productList.reduce(
      (accumulator, currentProduct) => accumulator + currentProduct.price,
      0
    );
  };

  const addProduct = (product) => {
    product.price = parseFloat(product.price);

    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    const totalPrice = calculateTotal(updatedProducts);
    setTotal(totalPrice);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    const totalPrice = calculateTotal(updatedProducts);
    setTotal(totalPrice);
  };

  return (
    <div className="App">
      <h1>Product Manager</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} />
      <div>
        <h2>Total Value worth of products: ${total.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default App;
