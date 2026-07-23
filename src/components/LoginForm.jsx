import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import FeedbackModal from "./modal/FeedbackModal";
import { useNavigate } from "react-router-dom";

const LoginForm = function () {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalVariant, setModalVariant] = useState("success");
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginPayload = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginPayload),
      });

      if (!response.ok) {
        const errore = await response.json();
        setModalMessage(errore.message || "Errore durante la registrazione");
        setModalVariant("error");
        setShowModal(true);
        return;
      }

      const token = await response.text();
      console.log(token);
      localStorage.setItem("token", token);

      setModalMessage("Login avvenuto con successo!");
      setModalVariant("success");
      setShowModal(true);

      setTimeout(() => {
      navigate("/dashboard");  
      }, 3000);

      setEmail("");
      setPassword("");
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
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

export default LoginForm;
