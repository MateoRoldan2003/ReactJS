import React from 'react';

const Checkout = ({ cart }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Checkout</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button>Proceder al pago</button>
    </div>
  );
};

export default Checkout;