import { Container, Nav, Navbar } from "react-bootstrap";

const WelcomeNavbar = function () {
  return (
    <Navbar expand="lg" className="bg-warning">
      <Container fluid>
        <Navbar.Brand href="#" className="fw-bold">
          Azienda Energia
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <Nav.Link>Accedi</Nav.Link>
            <Nav.Link>Registrati</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default WelcomeNavbar;
