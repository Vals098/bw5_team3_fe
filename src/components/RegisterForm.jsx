import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import FeedbackModal from "./modal/FeedbackModal";
import { useNavigate } from "react-router-dom";

const RegisterForm = function () {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [avatar, setAvatar] = useState("");
  const [role, setRole] = useState([2]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalVariant, setModalVariant] = useState("success");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      username,
      email,
      password,
      name,
      surname,
      rolesIds: [2],
    };

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setModalMessage(
          errorData.message ||
            "Si è verificato un errore durante la registrazione.",
        );
        setModalVariant("error");
        setShowModal(true);
        return;
      }

      setModalMessage(
        "Registrazione avvenuta con successo!  Verrai reindirizzato alla pagina di Login",
      );
      setModalVariant("success");
      setShowModal(true);

      setTimeout(() => {
        navigate("/");
      }, 1500);

      // reset del form
      setUsername("");
      setName("");
      setSurname("");
      setAvatar("");
      setEmail("");
      setPassword("");
      setRole(2);
    } catch {
      setModalMessage("Errore di rete: impossibile contattare il server.");
      setModalVariant("error");
      setShowModal(true);
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter your surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                placeholder="Create a new Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <FeedbackModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title={modalVariant === "success" ? "Successo" : "Errore"}
        message={modalMessage}
        variant={modalVariant}
      />
    </Container>
  );
};

export default RegisterForm;
