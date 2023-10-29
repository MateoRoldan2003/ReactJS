import React, { useState } from 'react';
import ProductList from './ProductList';
import Checkout from './Checkout';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <h1>Tienda</h1>
      <ProductList addToCart={addToCart} />
      <Checkout cart={cart} />
    </div>
  );
};

export default App;


