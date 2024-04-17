import React, { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "./NavBarApp.scss";

export const NavBarApp = () => {
  return (
    <Navbar expand="lg" className="colorNav fixed-top">
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="m-auto">
          <Nav.Link href="#inicio">
            <Button>INICIO</Button>
          </Nav.Link>
          <Nav.Link href="#contacto">
            <Button>CONTACTO</Button>
          </Nav.Link>
          <Nav.Link href="#experiencia">
            <Button>EXPERIENCIA</Button>
          </Nav.Link>
          <Nav.Link href="#formacion">
            <Button>FORMACIÓN</Button>
          </Nav.Link>
          <Nav.Link href="#proyectos">
            <Button>PROYECTOS</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarApp;
