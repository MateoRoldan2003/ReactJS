import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/category/vehiculos">Vehículos</Link> {/* Cambiar 'vehiculos' por el ID real de la categoría */}
      {/* ... Otros enlaces a categorías */}
    </nav>
  );
}

export default Navbar;

