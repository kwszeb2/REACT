import React, { useState } from "react";
import "./assets/style/navBarStyle/navBar.scss";
import "./assets/style/myStyle.scss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LabelBottomNavigation from "./layout/navigation/BottomNav.jsx";
import TopNavigation from "./layout/navigation/TopNav.jsx";
import Footer from "./layout/footer/Footer.jsx";
import ProductCategoryPage from "./pages/ProductCategoryPage.jsx";
import ProductListPage from "./pages/ProductListPage.jsx";
import ProductDetailedPage from "./pages/ProductDetailedPage.jsx";
import CartPage from './pages/CartPage.jsx';
import ContactPage from "./pages/ContactPage.jsx";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const [showNavigationAndFooter, setShowNavigationAndFooter] = useState(false);

  function updateCartCount() {
    setCartCount(cartCount + 1);
  }

  function toggleBadge() {
    setShowBadge(!showBadge);
  }

  function checkScreenSize() {
    setShowNavigationAndFooter(window.innerWidth > 960);
  }

  React.useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="App">
      <Router>
        {showNavigationAndFooter && <TopNavigation count={cartCount}
          showBadge={showBadge}
          toggleBadge={toggleBadge}/>}
        <Routes>
          <Route path="/" element={<ProductCategoryPage />} />
          <Route path="/:id" element={<ProductListPage />} />
          <Route path="/:id/:id" element={<ProductDetailedPage updateCartCount={updateCartCount}/>} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        {showNavigationAndFooter && <Footer />}
        {<LabelBottomNavigation
          count={cartCount}
          showBadge={showBadge}
          toggleBadge={toggleBadge}
        />}
      </Router>
    </div>
  );
}

export default App;