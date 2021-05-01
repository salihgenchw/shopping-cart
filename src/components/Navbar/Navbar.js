import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { CartIcon } from "../icons";

const NavBar = ({ totalItems }) => {
  return (
    <div>
      <Navbar bg="" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://i.ibb.co/jRWbqNk/hepsiburada.png"
              alt="navbarlogo"
              style={{ width: "170px" }}
            ></img>
          </Navbar.Brand>
          <Nav className="mr-auto" navbar></Nav>
          <Navbar bg="" variant="dark">
            <Nav.Item>
              <Nav.Link href="#">
                <CartIcon />
                Cart ({totalItems})
              </Nav.Link>
            </Nav.Item>
          </Navbar>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
