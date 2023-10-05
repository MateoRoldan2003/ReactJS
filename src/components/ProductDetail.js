import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/api/product/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error al obtener datos:', error));
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Producto</h1>
      <h2>{product.name}</h2>
      <p>Descripcion: {product.description}</p>
      <p>Precio: {product.price}</p>
    </div>
  );
}

export default ProductDetail;
