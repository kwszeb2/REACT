import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

export default function Category({ categories }) {
  return (
    <div>
    <Box m={3}>
      <Grid container spacing={2}>
        {categories.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Link className="bottomNavLink" to={`${item.productLine}`}>
              <Card  sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <Box p={1} className="cardContent">
                  <img src={item.productImg} alt={item.productLine} width={250} height={250}/>
                  <Typography variant="h6" component="div" sx={{ mt: 2 }}>{item.productLine}</Typography>
                </Box>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  </div>
  );
}
