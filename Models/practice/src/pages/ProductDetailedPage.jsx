import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { supabaseConfig } from "../server/config/db.config";
import { createClient } from "@supabase/supabase-js";
import { InputLabel, MenuItem, FormControl, Select, Grid, Box, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { red, green } from "@mui/material/colors";
import CartPage from "../pages/CartPage";

const supabase = createClient(supabaseConfig.url, supabaseConfig.key);

export default function ProductDetailsPage({ updateCartCount }) {
  const { id } = useParams();
  const navigate = useNavigate();


  const [productDetailData, setProductDetailData] = useState([]);
  const [quantity, setQuantity] = useState('');
  const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
    
      setCartCount(cartCount + 1);
      updateCartCount();
      navigate('/cart');

   /* const existingProduct = cartProduct.find(item => item.name === productDetailData.productName);
    if (existingProduct) {
      setCartProduct(cartProduct.map(item => {
        if (item.name === productDetailData.productName) {
          return { ...item, quantity: item.quantity + quantity };
        } else {
          return item;
        }
      }));
    } else {
      setCartProduct((prevCartProduct) => [...prevCartProduct, {
        name: productDetailData.productName,
        price: productDetailData.price,
        quantity: quantity
      }]);
    }
    console.log("Items " + JSON.stringify(cartProduct));
    navigate("/cart", {
      state: { cart: cartProduct}
    });*/
  };

  useEffect(() => {
    getData();
  }, [id]);

  async function getData() {
    try {
      const { data: productDetailData, error } = await supabase
        .from("Products")
        .select("*")
        .eq("product_id", id);

      if (error) {
        console.error("Error fetching data: ", error);
        return;
      }
      setProductDetailData(productDetailData);
      const product = productDetailData.find(
        (product) => product.product_id === id
      );

      if (product) {
        setProductDetailData(product);
      } else {
        console.error("Product not found for id: ", id);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  return (
    <div>
      <h1>Product Detailed Page {id} </h1>
      <Link to={"/"} onClick={() => navigate(-1)}>
        Back to Products
      </Link>
      <br />
      <Box m={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box>
              <img
                src={productDetailData.productImg}
                width={250}
                height={250}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <h2>{productDetailData.productName}</h2>
              <h3>{productDetailData.productVendor}</h3>
              <h4>{"Product Scale: " + productDetailData.productScale}</h4>
              <h4>
                {" "}
                In Stock:
                {productDetailData.inStock ? (
                  <CheckIcon sx={{ color: green[500] }} />
                ) : (
                  <CloseIcon sx={{ color: red[500] }} />
                )}
              </h4>
              {!productDetailData.inStock && (
                <h5>
                  * This product is not currently in stock. It will be available
                  soon.
                </h5>
              )}
              <h3>{"Price: $" + productDetailData.price}</h3>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Quantity</InputLabel>
                <Select 
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={quantity}
                  label="Quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                  disabled={!productDetailData.inStock}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
              <p>{productDetailData.productDescription}</p>
              <Button
                variant="contained"
                color="primary"
                disabled={!productDetailData.inStock}
                onClick={() => handleAddToCart()}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
