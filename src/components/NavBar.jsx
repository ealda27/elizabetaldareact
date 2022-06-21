import React from 'react'
import {Link} from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
import { BsCart3 } from 'react-icons/bs';

function NavBar() {
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to={"/"} >CASAFERRO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"} >INICIO</Nav.Link>
                        <NavDropdown title="MUEBLES" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to={"/Mueble/Model/Cocina"}> Mueble Cocina</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/Mueble/Model/Dormitorio"    }> Mueble Dormitorio</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/Mueble/Model/Estudio"}> Mueble Estudio</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/Mueble/Model/Baño"    }> Mueble Baño</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    <Nav>
                        <Nav.Link href="">Log In</Nav.Link>
                        <Nav.Link  as={Link} to={"/Chart"}><BsCart3/></Nav.Link>
                        <Nav.Link eventKey={2} href="">
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
