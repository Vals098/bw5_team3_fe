import React, { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { CompanyDataForm } from "../mini-components/CompanyDataForm";

const RegisterClient = () => {
  const [formData, setFormData] = useState({
    ragioneSociale: "",
    partitaIva: "",
    email: "",
  });
  const [alert, setAlert] = useState(null);

  const handleSave = (e) => {
    e.preventDefault();
    setAlert({ type: "success", msg: "Client registered successfully" });
    setFormData({ ragioneSociale: "", partitaIva: "", email: "" });
  };

  return (
    <div>
      <Card className="shadow-sm">
        <Card.Header as="h5" className="bg-success text-white">
          REGISTER NEW CLIENT
        </Card.Header>
        <Card.Body>
          {alert && <Alert variant={alert.type}>{alert.msg}</Alert>}
          <Form onSubmit={handleSave}>
            <Form.Group className="mb-3">
              <Form.Label>Legal Name</Form.Label>
              <Form.Control
                type="text"
                value={formData.ragioneSociale}
                onChange={(e) =>
                  setFormData({ ...formData, ragioneSociale: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>VAT Number</Form.Label>
              <Form.Control
                type="text"
                value={formData.partitaIva}
                onChange={(e) =>
                  setFormData({ ...formData, partitaIva: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </Form.Group>
            <Button type="submit" variant="success"></Button>
          </Form>
        </Card.Body>
      </Card>
      <CompanyDataForm />
    </div>
  );
};

export default RegisterClient;
