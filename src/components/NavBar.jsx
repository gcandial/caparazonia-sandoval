import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

function NavBar() {
  return (
    <div>
        <ReactBootstrap.Navbar bg="dark" variant="dark">
        <ReactBootstrap.Container>
            <ReactBootstrap.Navbar.Brand href="./">Caparazonia</ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootstrap.Nav className="me-auto">
                <ReactBootstrap.Nav.Link href="https://github.com/gcandial/caparazonia-sandoval">Inicio</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="https://github.com/gcandial/caparazonia-sandoval">Productos</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="https://github.com/gcandial/caparazonia-sandoval">Inventario</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="https://github.com/gcandial/caparazonia-sandoval">Nosotros</ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
    </div>
  );
}

export default NavBar;
