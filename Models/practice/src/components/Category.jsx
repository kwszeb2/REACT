import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Category({ categories }) {
  return (
    <div>
      {categories.map((item, index) => (
        <Link key={item.id} to={`/products/${item.id}`}>
          <Card key={index} className="mainCard">
            <CardMedia
              component="img"
              height="250"
              image={`https://source.unsplash.com/random?${Math.floor(
                Math.random() * 200
              )}`}
              alt={`Random number ${Math.floor(Math.random() * 1000)}`}
            />
            <CardContent>
              <Typography className="cardBody">{item.productLine}</Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
