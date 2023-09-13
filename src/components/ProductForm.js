import React, { useState } from "react";

function ProductForm({ addProduct }) {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: productId,
      name: productName,
      price: sellingPrice,
    };
    addProduct(product);
    setProductId("");
    setProductName("");
    setSellingPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product ID:
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </label>
      <label>
        Product Name:
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </label>
      <label>
        Selling Price:
        <input
          type="number"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
        />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
