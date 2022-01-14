import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import CartWidget from "./CartWidget";
function NavBar() {
  return (
    <>
        <ReactBootstrap.Navbar bg="dark" variant="dark">
          <ReactBootstrap.Container>
            <ReactBootstrap.Navbar.Brand href="./">Caparazonia</ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle aria-controls="caparazonia-navbar" />
            <ReactBootstrap.Navbar.Collapse id="caparazonia-navbar" className="justify-content-end">
              <ReactBootstrap.Nav className="me-auto">
                <ReactBootstrap.Nav.Link href="https://github.com/gcandial/caparazonia-sandoval">Inicio</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="https://github.com/gcandial/caparazonia-sandoval">Productos</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="https://github.com/gcandial/caparazonia-sandoval">Inventario</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="https://github.com/gcandial/caparazonia-sandoval">Nosotros</ReactBootstrap.Nav.Link>                
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