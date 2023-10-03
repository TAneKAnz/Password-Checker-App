import { Container, Nav, NavItem, Navbar } from "react-bootstrap";
import "./WebNavbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import webicon from "./assets/images/icon.png";
export function WebNavBar() {
  return (
    <Navbar
      expand="lg"
      className="justify-content-between py-0 "
      bg="secondary"
    >
      <Container className="mx-5 d-flex align-items-center">
        <Navbar.Brand as={Link} to="/" className="text-primary py-2 navbar-brand-with-image d-flex align-items-center">
          <img className="d-inline text-center" src={webicon} style={{ width: '50px', height: '50px' }}/>
          <h1 className=" d-inline text-center">Password Strength</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant="pills">
            <Linkto to={"/"} linkName={"Home"}></Linkto>

            <Linkto
              to={"/members"}
              linkName={"Members"}
            ></Linkto>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Linkto({ to, linkName }) {
  const resolvedPath = useResolvedPath(to); //แปลงเป็น absolute path
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  //ถ้า path ตรงให้ active
  return (
    <NavItem>
      {" "}
      <Nav.Link
        as={Link}
        to={to}
        className={
          isActive ? "active text-primary px-4 py-3 fw-bold" : "text-primary px-4 py-3"
        }
      >
        {linkName}
      </Nav.Link>{" "}
    </NavItem>
  );
}
