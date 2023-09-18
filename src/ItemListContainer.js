import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>{greeting}</h1>
          <button className="btn btn-primary">Botón 1</button>
          <button className="btn btn-secondary">Botón 2</button>
          <button className="btn btn-success">Botón 3</button>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;