import React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Navbar>
        <Container>
          <Link to={"/"}>
            <NavbarBrand
              className={
                location.pathname === "/home"
                  ? "btn btn-light"
                  : "btn btn-dark text-light"
              }
            >
              Header
            </NavbarBrand>
          </Link>
          <Link to={"/content"}>
            <NavbarBrand
              className={
                location.pathname === "/home"
                  ? "btn btn-light"
                  : "btn btn-dark text-light"
              }
            >
              Content
            </NavbarBrand>
          </Link>
          <Link to={"/footer/:id"}>
            <NavbarBrand
              className={
                location.pathname === "/home"
                  ? "btn btn-light"
                  : "btn btn-dark text-light"
              }
            >
              Footer
            </NavbarBrand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Nav;
