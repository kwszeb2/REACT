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
            <img src={item.productImg} width={250}  height={250}/>
            <CardContent>
              <Typography className="cardBody">{item.productLine}</Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
