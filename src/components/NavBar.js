import React from 'react';
import "../App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

const NavBarapp = () => {
    return ( 
        <NavBar bg="dark" expand="lg">
          <Container>
            <NavBar.Brand href="#home">Cerveceria Mil Nueve 86</NavBar.Brand>
            <NavBar.Toggle aria-controls="basic-navbar-nav" />
            <NavBar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link  href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Conocénos</Nav.Link>
                <NavDropdown title="Cervezas" id="basic-nav-dropdown">
                  <NavDropdown.Item  href="#action/3.1">Cerverza Rubia</NavDropdown.Item>
                  <NavDropdown.Item  href="#action/3.2">Cerverza Scottish</NavDropdown.Item>
                  <NavDropdown.Item  href="#action/3.3">Cerveza Porter</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item  href="#action/3.4">
                    Saber Más
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </NavBar.Collapse>
          </Container>
          <CartWidget />    
        </NavBar>
  );
};

export default NavBarapp;