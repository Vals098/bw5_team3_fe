import React, { useState } from "react";
import { Card, Form, Table, Row, Col, Button, Alert } from "react-bootstrap";

const FindInvoice = () => {
  const token = localStorage.getItem("token");

  const [clientId, setClientId] = useState("");
  const [invoiceStatusId, setInvoiceStatusId] = useState("");
  const [date, setDate] = useState("");
  const [year, setYear] = useState("");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");

  const [invoices, setInvoices] = useState([]);
  const [message, setMessage] = useState(null);

  const handleSearch = async () => {
    try {
      const params = new URLSearchParams();

      params.append("page", 0);
      params.append("size", 20);

      if (clientId.trim() !== "") {
        params.append("clientId", clientId);
      }

      if (invoiceStatusId !== "") {
        params.append("invoiceStatusId", invoiceStatusId);
      }

      if (date !== "") {
        params.append("date", date);
      }

      if (year !== "") {
        params.append("year", year);
      }

      if (minAmount !== "") {
        params.append("min", minAmount);
      }

      if (maxAmount !== "") {
        params.append("max", maxAmount);
      }

      const response = await fetch(
        `http://localhost:8080/invoices?${params.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Unable to retrieve invoices.");
      }

      const data = await response.json();

      setInvoices(data.content);
      setMessage(null);
    } catch (error) {
      setInvoices([]);
      setMessage(error.message);
    }
  };
    return (
    <Card className="shadow-sm">
      <Card.Header as="h5" className="bg-info text-white">
        FIND INVOICE
      </Card.Header>

      <Card.Body>
        {message && <Alert variant="danger">{message}</Alert>}

        <Row className="g-3 mb-4">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Client ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter client UUID..."
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Select
                value={invoiceStatusId}
                onChange={(e) => setInvoiceStatusId(e.target.value)}
              >
                <option value="">Show All</option>
                <option value="1">PAID</option>
                <option value="2">PENDING</option>
                <option value="3">OVERDUE</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter year..."
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Minimum Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Minimum amount..."
                value={minAmount}
                onChange={(e) => setMinAmount(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Maximum Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Maximum amount..."
                value={maxAmount}
                onChange={(e) => setMaxAmount(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Button
              variant="primary"
              className="w-100"
              onClick={handleSearch}
            >
              Search
            </Button>
          </Col>
        </Row>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Client</th>
            </tr>
          </thead>

          <tbody>
            {invoices.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No invoices found.
                </td>
              </tr>
            ) : (
              invoices.map((invoice) => (
                <tr key={invoice.invoiceId}>
                  <td>{invoice.number}</td>
                  <td>{invoice.date}</td>
                  <td>€ {invoice.amount.toFixed(2)}</td>
                  <td>{invoice.invoiceStatus?.status}</td>
                  <td>{invoice.client?.legalName}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default FindInvoice;