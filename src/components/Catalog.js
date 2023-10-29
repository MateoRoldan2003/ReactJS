import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Catalog() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`/api/products?category=${id}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al obtener datos:', error));
  }, [id]);

  return (
    <div>
      <h1>Catalogo</h1>
      <h2>Categoría: {id}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <a href={`/item/${product.id}`}>{product.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;


