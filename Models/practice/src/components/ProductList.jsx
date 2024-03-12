import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ProductList({ products }) {
  return (
    <div>
      <Link to={'/'}>Back to Categories</Link>
      {!products.length && (
        <Typography variant="h3" gutterBottom align="center">
          Sorry, No Products Found in this Category
        </Typography>
      )}

      {products.map((item) => (
        <Card sx={{ maxWidth: 345 }} key={item.CategoryProductID}>
          <CardContent>
            <Link to={`/products/${item.CategoryProductID}/product`}>
             <img src={item.productImg} width={250} height={250}/>
              <Typography gutterBottom variant="h6" component="div">
                {item.productName}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {"$" + item.price}
              </Typography>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
