import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import CartWidget from "./CartWidget";
function NavBar() {
  return (
    <>
      <ReactBootstrap.Navbar bg="dark" variant="dark">
        <ReactBootstrap.Container>
          <ReactBootstrap.Navbar.Brand href="/">Caparazonia</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Toggle aria-controls="caparazonia-navbar" />
          <ReactBootstrap.Navbar.Collapse id="caparazonia-navbar" className="justify-content-end">
            <ReactBootstrap.Nav className="me-auto">
              <ReactBootstrap.Nav.Link href="/">Inicio</ReactBootstrap.Nav.Link>
              <ReactBootstrap.NavDropdown title="Categorías" id="basic-nav-dropdown">
                <ReactBootstrap.NavDropdown.Item href="/categoria/carnazas">Carnazas</ReactBootstrap.NavDropdown.Item>
                <ReactBootstrap.NavDropdown.Item href="/categoria/articulos-perro">Artículos para perro</ReactBootstrap.NavDropdown.Item>
                <ReactBootstrap.NavDropdown.Item href="/categoria/juguetes-perro">Juguetes para perro</ReactBootstrap.NavDropdown.Item>
              </ReactBootstrap.NavDropdown>
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