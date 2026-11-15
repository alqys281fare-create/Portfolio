
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import logo from "../../assets/SLogo2.png";
import { Link, useLocation } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";

import { GiSkills } from "react-icons/gi";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  const location = useLocation();

  // Handle navbar background on scroll
  useEffect(() => {
    const scrollHandler = () => {
      setNavColour(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);

    // Initial check
    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  // Close mobile menu when changing pages
  useEffect(() => {
    setExpand(false);
  }, [location.pathname]);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <img
            src={logo}
            className="img-fluid logo"
            alt="Brand Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              active={location.pathname === "/"}
            >
              <AiOutlineHome />
              {" "}Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/skillset"
              active={location.pathname === "/skillset"}
            >
              <GiSkills />
              {" "}Skillset
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/project"
              active={location.pathname === "/project"}
            >
              <AiOutlineFundProjectionScreen />
              {" "}Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
