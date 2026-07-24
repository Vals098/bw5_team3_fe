import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const WelcomeNavbar = function () {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Navbar expand="lg" className="bg-warning">
      <Container fluid>
        <Navbar.Brand href="#" className="fw-bold">
          Azienda Energia
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            {location.pathname !== "/menu" && (
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                Accedi
              </Nav.Link>
            )}
            {location.pathname !== "/menu" && (
              <Nav.Link
                onClick={() => {
                  navigate("/register");
                }}
              >
                Registrati
              </Nav.Link>
            )}
            {location.pathname === "/menu" && (
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default WelcomeNavbar;
