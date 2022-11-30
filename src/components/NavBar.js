import Container from 'react-boostrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
/* import '.App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; */

const NavBarapp = () => {
    return ( 
        <NavBar bg="light" expand="lg">
          <Container>
            <NavBar.Brand href="#home">React-Bootstrap</NavBar.Brand>
            <NavBar.Toggle aria-controls="basic-navbar-nav" />
            <NavBar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </NavBar.Collapse>
          </Container>
    </NavBar>
  );
};

export default NavBarapp;