import React, { useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";

const ContactClient = () => {
  const token = localStorage.getItem("token");

  const [piva, setPiva] = useState("");
  const [status, setStatus] = useState(null);

  const handleContact = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/clients/contact?piva=${encodeURIComponent(
          piva
        )}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Unable to register contact.");
      }

      setStatus({
        type: "success",
        msg: "Contact registered successfully!",
      });

      setPiva("");
    } catch (error) {
      setStatus({
        type: "danger",
        msg: error.message,
      });
    }
  };

  return (
    <Card className="shadow-sm">
      <Card.Header as="h5" className="bg-dark text-white">
        CONTACT CLIENT
      </Card.Header>

      <Card.Body>
        {status && (
          <Alert
            variant={status.type}
            dismissible
            onClose={() => setStatus(null)}
          >
            {status.msg}
          </Alert>
        )}

        <Form onSubmit={handleContact}>
          <Form.Group className="mb-3">
            <Form.Label>VAT Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert VAT number..."
              value={piva}
              onChange={(e) => setPiva(e.target.value)}
              required
            />
          </Form.Group>

          <Button type="submit" variant="outline-dark">
            Register Contact Today
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ContactClient;