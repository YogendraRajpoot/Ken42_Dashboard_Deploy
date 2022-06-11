import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../Redux/auth/actionAuth";

export const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const expand = "lg";
  function onClickLogout() {
    console.log("19");
    dispatch(logOut());
    navigate("login");
  }
  return (
    <>
      {/* {["lg"].map((expand) => ( */}
      <Navbar
        fixed="top"
        key={expand}
        bg="dark"
        variant="dark"
        expand={expand}
        className="mb-3 py-3"
      >
        <Container fluid>
          <Navbar.Brand href="#">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/">
                  Student List
                </Nav.Link>
                <Nav.Link as={Link} to="eventlist">
                  Event List
                </Nav.Link>
                <Nav.Link as={Link} to="studentchart">
                  Student Chart
                </Nav.Link>
                <Nav.Link onClick={onClickLogout}>Logout</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/* ))} */}
    </>
  );
};
// [false, "sm", "md", "lg", "xl", "xxl"]
