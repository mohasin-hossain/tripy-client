import React from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { logo } from "../../../assets/index";
import { HashLink } from "react-router-hash-link";
import "./Header.css";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <Navbar sticky="top" bg="light" expand="md">
      <Container>
        <Navbar.Brand as={HashLink} to="/home#home">
        <img className="me-auto" src={logo} alt="logo" />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#about">
              About
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#tours">
              Tour Packages
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#activities">
              Activities
            </Nav.Link>
            <div className="login-section">
              {(user.displayName || user.email) && (
                <DropdownButton
                  id="dropdown-item-button"
                  title={user.displayName}
                >
                  <Dropdown.Item as={Link} to="/my-bookings">
                    My Bookings
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/all-bookings">
                    Manage All Bookings
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/add-place">
                    Add a new Place
                  </Dropdown.Item>
                </DropdownButton>
              )}
              <span>
                {user.displayName || user.email ? (
                  <button className="logout-btn" onClick={logOut}>
                    Logout
                  </button>
                ) : (
                  <Link className="btn btn-primary" to="/login">Login</Link>
                )}
              </span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
