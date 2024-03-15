import React from "react";
import "./assets/style/navBarStyle/navBar.scss";
import "./assets/style/myStyle.scss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LabelBottomNavigation from "./layout/navigation/BottomNav.jsx";
import ProductCategoryPage from "./pages/ProductCategoryPage.jsx";
import ProductListPage from "./pages/ProductListPage.jsx";
import ProductDetailedPage from "./pages/ProductDetailedPage.jsx";
import CartPage from './layout/body/CartPage.jsx';
import ContactPage from "./pages/ContactPage.jsx";

function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProductCategoryPage />} />
          <Route path="/:id" element={<ProductListPage />} />
          <Route path="/:id/:id" element={<ProductDetailedPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>  <LabelBottomNavigation />
      </Router>
    </div>
  );
}

export default App;
