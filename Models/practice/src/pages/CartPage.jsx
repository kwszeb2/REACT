import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
} from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function CartPage({updateCartCount}) {
  const navigate = useNavigate();

  const location = useLocation();
  const { product, qty, price } = location.state || {};

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (product) {
      const existingItemIndex = cart.findIndex(
        (item) => item.productName === product.productName
      );
      if (existingItemIndex > -1) {
        const newCart = [...cart];
        newCart[existingItemIndex].qty = qty;
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
      } else {
        setCart([
          ...cart,
          { productName: product.productName, qty: qty, price: product.price },
        ]);
        localStorage.setItem(
          "cart",
          JSON.stringify([
            ...cart,
            {
              productName: product.productName,
              qty: qty,
              price: product.price,
            },
          ])
        );
      }
    }
  }, [product, qty, price, cart]);

  useEffect(() => {
    const calculateTotal = () => {
      const totalAmount = cart.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      );
      const taxAmount = totalAmount * 0.1;
      const finalPriceAmount = totalAmount + taxAmount;
      setTotal(totalAmount);
      setTax(taxAmount);
      setFinalPrice(finalPriceAmount);
    };
    calculateTotal();
  }, [cart]);

  const handleRemove = (productName) => {
    const newCart = cart.filter((item) => item.productName !== productName);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));

    updateCartCount();
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, [handleRemove]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (agree) => {
    if(agree){
      setCart([]);
      setTotal(0);
    setTax(0);
    setFinalPrice(0);
      localStorage.setItem("cart", JSON.stringify([]));
      localStorage.clear();

      updateCartCount();
    }
    setOpen(false);
  };

  return (
    <div>
      <Box m={3}>
      <h1>My Shopping Cart</h1>
      <Link to={"/"} onClick={() => navigate(-1)}>
        Back to Product Details
      </Link>
      <br />
      {cart.length > 0 ? (
        <Grid item xs={12} md={6} lg={4}>
          <List>
            {cart.map((item, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={item.productName}
                  secondary={`Quantity: ${item.qty}, Price: $${item.price}`}
                />
                <Button onClick={() => handleRemove(item.productName)}>
                  Remove
                </Button>
              </ListItem>
            ))}
          </List>
          <div className="price">
            <Typography variant="h6" align="right">
              <span className="alignText">Subtotal:</span> ${total.toFixed(2)}
            </Typography>
            <Typography variant="h6" align="right">
              <span className="alignTax">Tax:</span> ${tax.toFixed(2)}
            </Typography>
            <Typography variant="h6" align="right">
              <span className="alignText">Total:</span> ${finalPrice.toFixed(2)}
            </Typography>
          </div>
          <div className="checkout-btn">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleClickOpen}
              >
              Checkout
            </Button>
          </div>
          <Dialog 
            open={open}
            onClose={() => handleClose(false)}
          >
            <DialogTitle >
          {"Ready for checkout?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          Thank you for your purchase. All costs are covered by the developer. Enjoy!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Disagree</Button>
          <Button onClick={() => handleClose(true)} autoFocus>
            Agree
          </Button>
        </DialogActions>
            <DialogTitle></DialogTitle>
          </Dialog>
        </Grid>
      ) : (
        <Typography variant="h5" align="center">
          Your cart is empty.
        </Typography>
      )}
      </Box>
    </div>
  );
}