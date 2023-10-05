import React from 'react';
import { Link } from 'react-router-dom';

function ItemList({ items }) {
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <Link to={`/item/${item.id}`}>Ver Detalles</Link>
        </div>
      ))}
    </div>
  );
}

export default ItemList;