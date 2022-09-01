import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import Logo from "./../../assets/Logo.svg";
import "./style.css";

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <div className="logo-container">
            <img src={Logo} alt="Logo" />
            <p>Session</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Services</Nav.Link>
            <Nav.Link href="#">Contact uS</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="primary">العربية</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
