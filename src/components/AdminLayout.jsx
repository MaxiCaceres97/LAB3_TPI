import React from 'react';
import { Link } from 'react-router-dom';

const AdminLayout = ({ children }) => (
  <div className="wrapper">
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login: </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">Rol: </Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto" className="nav-link">Contacto</Link> {/* Enlace a la página de contacto */}
        </li>
      </ul>
    </nav>

    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="/" className="brand-link">
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/nuevo-viaje" className="nav-link">Nuevo Viaje</Link>
            </li>
            <li className="nav-item">
              <Link to="/historial-viajes" className="nav-link">Historial de Viajes</Link>
            </li>
            <li className="nav-item">
              <Link to="/bills" className="nav-link">Bills</Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>

    <div className="content-wrapper">
      <section className="content">
        <div className="container-fluid">
          {children}
        </div>
      </section>
    </div>
  </div>
);

export default AdminLayout;
