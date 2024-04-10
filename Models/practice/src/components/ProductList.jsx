import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
//import ProductDetailedPage from "../pages/ProductDetailedPage";

export default function ProductList({ products }) {
  const navigate = useNavigate();

  return (
    <div>
      <Box m={3}>
      <Link to={"/"} onClick={() => navigate(-1)}>
        Back to Categories
      </Link>
      </Box>
    <Box m={3}>
      {!products.length && (
        <Box sx={{ pt: 2, display: "flex", justifyContent: "center" }}>
          <Typography variant="h3" gutterBottom>
            Sorry, No Products Found in this Category
          </Typography>
        </Box>
      )}
      <Grid container spacing={2}>
        {products.map((item) => (
          <Grid item xs={12} md={4} key={item.product_id}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardContent>
                <Link underline="none" color="inherit" to={`/products/${item.productLine}`}>
                  <img src={item.productImg} alt={item.productName}width={250} height={250} />
                  <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                    {item.productName}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
                    {"$" + item.price}
                  </Typography>
                </Link>
              </CardContent>
              <Box sx={{ flexGrow: 1 }} />
              <Button sx={{ py: 1, mt: 1 }} onClick={() => navigate(`/p/${item.product_id}`)}>
                View Details
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  );
}