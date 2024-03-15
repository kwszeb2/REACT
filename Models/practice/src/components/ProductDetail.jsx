import React from "react";
import {Link, useParams, useNavigate} from 'react-router-dom';

export default function ProductDetail({ products }) {
  const {id} = useParams();
  const navigate = useNavigate();
  console.log(products)
  return (
    <div>
      <Link to={'/'} onClick={() => navigate(-1)}>Back to Products</Link>
     <br/><br/>
     {products.map((item) => (
        
             <img src={item.productImg} width={250} height={250}/>
                +item.productName
                +"$" + item.price
      ))}
    </div>
  );
}
