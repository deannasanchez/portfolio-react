import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import './Nav.css';

function NavBar() {
    return (
    <Navbar bg="light" variant="light" >
        <Navbar.Brand href="#home">Carla Manosa</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
     </Navbar>
    );
}

export default NavBar;