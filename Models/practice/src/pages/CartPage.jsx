import React from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import ProductList from "../components/ProductList.jsx";
export default function CartPage() {
  const { id } = useParams();
  const navigate = useNavigate();

 /* const location = useLocation();
  const cart = location.state.cart;
 */
  /*const removeFromCart = (index) => {
    setCart(cart.filter((item, i) => i !== index));
  };
  
  const updateQuantity = (index, newQuantity) => {
    setCart(cart.map((item, i) => i === index ? {...item, quantity: newQuantity} : item));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
*/

  return (
    <div>
      <h1>My Shopping Cart</h1>
      <Link to={"/"} onClick={() => navigate(-1)}>
        Back to Product Details
      </Link>
      <br />
        <Grid item xs={12} md={6} lg={4}>
        cart
        </Grid>
    </div>
  );
}
