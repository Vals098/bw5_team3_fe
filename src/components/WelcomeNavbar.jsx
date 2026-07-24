import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const WelcomeNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedPage =
    location.pathname === "/menu" ||
    location.pathname === "/admin-menu";

  return (
    <Navbar expand="lg" className="bg-warning">
      <Container fluid>
        <Navbar.Brand
          href="#"
          className="fw-bold"
          onClick={(e) => e.preventDefault()}
        >
          EPIC ENERGY
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            {!isLoggedPage && (
              <Nav.Link onClick={() => navigate("/")}>
                Accedi
              </Nav.Link>
            )}

            {!isLoggedPage && (
              <Nav.Link onClick={() => navigate("/register")}>
                Registrati
              </Nav.Link>
            )}

            {isLoggedPage && (
              <Nav.Link
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
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