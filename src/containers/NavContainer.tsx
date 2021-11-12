import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


class NavContainer extends React.Component {
    render() {
      return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">GetFlix</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      );
    }
  }
  
  export default NavContainer;