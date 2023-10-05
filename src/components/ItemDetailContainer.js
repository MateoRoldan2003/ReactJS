import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Aquí deberías hacer una solicitud a tu API o cargar detalles del producto según el itemId (id)
    // Ejemplo de solicitud ficticia a una API:
    fetch(`/api/product/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Detail</h1>
      <h2>{product.name}</h2>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}

export default ProductDetail;

