import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<div>Page Not Found!</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
