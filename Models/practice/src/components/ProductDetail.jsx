import React from "react";

export default function ProductDetail({ product }) {
  return (
    <div>
      <img
        src={`https://source.unsplash.com/random?${Math.floor(
          Math.random() * 200
        )}`}
        height="250"
        width="250"
      />
      {product.product_id +
        " " +
        product.productName +
        " " +
        product.productScale}
      {product.productVendor}
      {"$" + product.price}
      Description: {product.productDescription}
    </div>
  );
}
