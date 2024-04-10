import * as React from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { grey } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/images/logo.jpg";

export default function TopNavigation({ count, showBadge, toggleBadge }) {
  return (
    <div className="top-nav">
      <div className="top-nav-content">
        <div className="top.nav-logo">
          <img src={logo} alt="logo"/>
        </div>
        <Link to="/" className="top-nav-link ">
          Category
        </Link>
        <Link to="/contact" className="top-nav-link ">
          Contact
        </Link>
        <Link to="/cart" className="top-nav-cart">
          <Badge
            badgeContent={count}
            color="primary"
            showZero={true}
            invisible={!showBadge}
            sx={{ color: grey[100] }}
            onClick={toggleBadge}
          >
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </div>
    </div>
  );
}