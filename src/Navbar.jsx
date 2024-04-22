import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/servicios">Servicios</a></li>
        <li><a href="/nosotros">Nosotros</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
