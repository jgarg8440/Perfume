import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Components/CartContext";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Awards from "./Components/Awards";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";

const App = () => (
  <CartProvider>
    <Router>
      <div className="min-h-screen bg-[#0C0C0C] font-sans">
        <Navbar />
        <Cart />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  </CartProvider>
);

export default App;