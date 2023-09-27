import { Container, Nav, NavItem, Navbar } from "react-bootstrap";
import "./WebNavbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export function WebNavBar() {
  return (
    <Navbar
      expand="lg"
      className="justify-content-between py-0 "
      bg="secondary"
    >
      <Container className="mx-5">
        <Navbar.Brand as={Link} to="/" className="text-primary py-0">
          <h1>Computation</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant="pills">
            <Linkto to={"/"} linkName={"Home"}></Linkto>
            <Linkto
              to={"/passwordchecker"}
              linkName={"Password Checker"}
            ></Linkto>
            <Linkto to={"/passwordsuggestion"} linkName={"PasswordSuggestion"}></Linkto>
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
        className={isActive ? "active text-warning px-4 py-3 " : "text-primary px-4 py-3"}
      >
        {linkName}
      </Nav.Link>{" "}
    </NavItem>
  );
}
