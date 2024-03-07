import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ProductList({ products }) {
  return (
    <div>
      {!products.length && (
        <Typography variant="h3" gutterBottom align="center">
          Sorry, No Products Found in this Category
        </Typography>
      )}

      {products.map((item) => (
        <Card sx={{ maxWidth: 345 }} key={item.CategoryProductID}>
          <CardContent>
            <Link to={`/products/${item.CategoryProductID}/product`}>
              <CardMedia
                component="img"
                height="194"
                image={`https://source.unsplash.com/random?${Math.floor(
                  Math.random() * 200
                )}`}
              />
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
