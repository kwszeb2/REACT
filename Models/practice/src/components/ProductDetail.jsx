import React from "react";
import {Link, useParams} from 'react-router-dom';

export default function ProductDetail({ product }) {
   const {id} = useParams();
  return (
    <div>
      <Link to={'/products/'+id}>Back to Products</Link>
      <img
        src={product.productImg}
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
