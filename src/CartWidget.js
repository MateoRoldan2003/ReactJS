import React from 'react';

function CartWidget() {
  const itemCount = 5; // Número hardcodeado (puedes cambiarlo según sea necesario)

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="badge badge-danger">{itemCount}</span>
    </div>
  );
}

export default CartWidget;