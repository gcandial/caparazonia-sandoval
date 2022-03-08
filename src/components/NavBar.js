import React from "react";
import { Link } from "react-router-dom";
import * as ReactBootstrap from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import CartWidget from "./CartWidget";
import '../App.css';

function NavBar() {
  return (
    <>
      <ReactBootstrap.Navbar bg="dark" variant="dark" expand="lg">
        <ReactBootstrap.Container>
          <Link to='/' className="navbar-brand"><FontAwesomeIcon icon={faPaw} /> CAPARAZONIA</Link>
          <ReactBootstrap.Navbar.Toggle aria-controls="caparazonia-navbar" />
          <CartWidget />
          <ReactBootstrap.Navbar.Collapse id="caparazonia-navbar" className="justify-content-end">
            <ReactBootstrap.Nav className="me-auto">
              <Link to='/' className="nav-link"><span className="pink">Inicio</span></Link>
              <Link to="/categoria/carnazas" className="nav-link"><span className="pink">Carnazas</span></Link>
              <Link to="/categoria/articulos-perro" className="nav-link"><span className="pink">Artículos para perro</span></Link>
              <Link to="/categoria/juguetes-perro" className="nav-link"><span className="pink">Juguetes para perro</span></Link>
            </ReactBootstrap.Nav>
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Container>
      </ReactBootstrap.Navbar>
    </>
  );
}

export default NavBar;