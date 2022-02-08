import React from "react";
import { Link } from "react-router-dom";
import * as ReactBootstrap from 'react-bootstrap';
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
      <ReactBootstrap.Navbar bg="dark" variant="dark">
        <ReactBootstrap.Container>
          <Link to='/' className="navbar-brand">Caparazonia</Link>
          <ReactBootstrap.Navbar.Toggle aria-controls="caparazonia-navbar" />
          <ReactBootstrap.Navbar.Collapse id="caparazonia-navbar" className="justify-content-end">
            <ReactBootstrap.Nav className="me-auto">
              <Link to='/' className="nav-link">Inicio</Link>
              <Link to="/categoria/carnazas" className="nav-link">Carnazas</Link>
              <Link to="/categoria/articulos-perro" className="nav-link">Artículos para perro</Link>
              <Link to="/categoria/juguetes-perro" className="nav-link">Juguetes para perro</Link>
            </ReactBootstrap.Nav>
            <ReactBootstrap.Navbar.Text >
              <CartWidget />
            </ReactBootstrap.Navbar.Text>
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Container>
      </ReactBootstrap.Navbar>
    </>
  );
}

export default NavBar;