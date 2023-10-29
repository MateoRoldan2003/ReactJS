<<<<<<< HEAD
import React, { useState } from 'react';
import ProductList from './ProductList';
import Checkout from './Checkout';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavBnpm ar';
import Catalog from './Catalog';
import ProductDetail from './ProductDetail';
>>>>>>> 30bd373543439f6aff0d1f9609e86b8200014439

  return (
<<<<<<< HEAD
    <div>
      <h1>Tienda</h1>
      <ProductList addToCart={addToCart} />
      <Checkout cart={cart} />
    </div>
=======
    <Router>
      <div>
        <Navbar />
        <Routes> {}
          <Route path="/" element={<Catalog />} />
          <Route path="/category/:id" element={<Catalog />} />
          <Route path="/item/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
>>>>>>> 30bd373543439f6aff0d1f9609e86b8200014439
  );
};

export default App;


