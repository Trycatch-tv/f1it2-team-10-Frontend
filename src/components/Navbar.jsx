import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/crear-cita">Crear cita</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;