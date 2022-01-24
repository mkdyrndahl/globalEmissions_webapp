import React from "react";
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap"
import Logo from "../images/green-leaf.png"

const NewNavBar = () => {
  return (
    <Navbar bg="light" expand="lg" >
      <Container >
        <Navbar.Brand href="/">
          <Image src={Logo} width="35" height="35" rounded/>
          Global Emissions Data
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/nacountries">North America</Nav.Link>
            <Nav.Link href="/eucountries">European Union</Nav.Link>
            <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item href="adminNA">Database Admin - NA</NavDropdown.Item>
              <NavDropdown.Item href="adminEU">Database Admin - EU</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NewNavBar