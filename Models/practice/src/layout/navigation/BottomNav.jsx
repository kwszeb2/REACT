import * as React from "react"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import InventoryIcon from "@mui/icons-material/Inventory"
import Badge from "@mui/material/Badge"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import ContactPageIcon from "@mui/icons-material/ContactPage"
import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"

export default function LabelBottomNavigation({ count, showBadge, toggleBadge }) {
  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case "products":
        navigate("/")
        break
      case "cart":
        navigate("/cart")
        break
      case "contact":
        navigate("/contact")
        break
      default:
        break
    }
  }

  return (
    <Grid container justifyContent="center" sx={{ width: "100%" }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={false}
        lg={false}
        sx={{
          display: { xs: "block", sm: "block", md: "none", lg: "none" },
        }}
      >
        <BottomNavigation showLabels onChange={handleChange}>
          <BottomNavigationAction label="Products" value="products" icon={<InventoryIcon />} />
          <BottomNavigationAction
            label="Cart"
            value="cart"
            icon={
              <Badge badgeContent={count} color="primary" showZero={true} invisible={!showBadge}>
                <ShoppingCartIcon />
              </Badge>
            }
            onClick={toggleBadge}
          />
          <BottomNavigationAction label="Contact Us" value="contact" icon={<ContactPageIcon />} />
          <BottomNavigationAction />
        </BottomNavigation>
      </Grid>
    </Grid>
  )
}