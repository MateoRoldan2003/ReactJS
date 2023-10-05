import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa "Routes" en lugar de "Route"
import Navbar from './NavBnpm ar';
import Catalog from './Catalog';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> {/* Cambia a "Routes" */}
          <Route path="/" element={<Catalog />} />
          <Route path="/category/:id" element={<Catalog />} />
          <Route path="/item/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


