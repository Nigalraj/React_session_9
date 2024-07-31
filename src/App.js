import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductDetails from './features/product/ProductDetails';
import ProductList from './features/product/ProductList';
import ProductForm from './features/product/ProductForm';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add-product">Add Product</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/add-product" element={<ProductForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
