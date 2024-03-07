import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { useNavigate } from "react-router-dom";

const useStyles = (theme) => ({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case "products":
        navigate("/");
        break;
      case "cart":
        navigate("/cart");
        break;
      case "contact":
        navigate("/contact");
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      className={classes.root}
      showLabels
      sx={{ width: 500 }}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Products"
        value="products"
        icon={<InventoryIcon />}
      />
      <BottomNavigationAction
        label="Cart"
        value="cart"
        icon={<ShoppingCartIcon />}
      />
      <BottomNavigationAction
        label="Contact Us"
        value="contact"
        icon={<ContactPageIcon />}
      />
      <BottomNavigationAction />
    </BottomNavigation>
  );
}
