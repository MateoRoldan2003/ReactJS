import React from 'react';

const products = [
  { id: 1, name: 'Producto 1', price: 100 },
  { id: 2, name: 'Producto 2', price: 150 },
  { id: 3, name: 'Producto 3', price: 200 },
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Añadir al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;