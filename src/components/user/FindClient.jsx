import React, { useState } from "react";
import { Card, Form, Table, Row, Col, Button, Alert } from "react-bootstrap";

const FindClient = () => {
  const token = localStorage.getItem("token");

  const [filter, setFilter] = useState("legalName");
  const [value, setValue] = useState("");
  const [orderBy, setOrderBy] = useState("legalName");

  const [clients, setClients] = useState([]);
  const [message, setMessage] = useState(null);

  const handleSearch = async () => {
    try {
      const params = new URLSearchParams();

      params.append("page", 0);
      params.append("size", 20);
      params.append("orderBy", orderBy);

      if (value.trim() !== "") {
        params.append(filter, value);
      }

      const response = await fetch(
        `http://localhost:8080/clients?${params.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Unable to retrieve clients.");
      }

      const data = await response.json();

      setClients(data.content);
      setMessage(null);
    } catch (error) {
      setClients([]);
      setMessage(error.message);
    }
  };

  return (
    <Card className="shadow-sm">
      <Card.Header as="h5" className="bg-secondary text-white">
        FIND CLIENT
      </Card.Header>

      <Card.Body>
        {message && <Alert variant="danger">{message}</Alert>}

        <Row className="mb-3">
          {/* FILTER */}
          <Col md={3}>
            <Form.Select
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setValue("");
              }}
            >
              <option value="legalName">Legal Name</option>
              <option value="yearlyIncome">Yearly Income</option>
              <option value="entryDate">Entry Date</option>
              <option value="lastContactDate">Last Contact Date</option>
            </Form.Select>
          </Col>

          {/* VALUE */}
          <Col md={3}>
            {filter === "legalName" && (
              <Form.Control
                type="text"
                placeholder="Insert legal name..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            )}

            {filter === "yearlyIncome" && (
              <Form.Control
                type="number"
                placeholder="Insert yearly income..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            )}

            {(filter === "entryDate" ||
              filter === "lastContactDate") && (
              <Form.Control
                type="date"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            )}
          </Col>

          {/* SORT */}
          <Col md={3}>
            <Form.Select
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
            >
              <option value="legalName">Sort: Legal Name</option>
              <option value="yearlyIncome">Sort: Yearly Income</option>
              <option value="entryDate">Sort: Entry Date</option>
              <option value="lastContactDate">Sort: Last Contact Date</option>
              <option value="province">Sort: Province</option>
            </Form.Select>
          </Col>

          {/* SEARCH */}
          <Col md={3}>
            <Button
              className="w-100"
              variant="primary"
              onClick={handleSearch}
            >
              Search
            </Button>
          </Col>
        </Row>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Legal Name</th>
              <th>VAT Number</th>
              <th>Email</th>
              <th>Yearly Income</th>
              <th>Entry Date</th>
            </tr>
          </thead>

          <tbody>
            {clients.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No clients found.
                </td>
              </tr>
            ) : (
              clients.map((client) => (
                <tr key={client.clientId}>
                  <td>{client.legalName}</td>
                  <td>{client.iva}</td>
                  <td>{client.email}</td>
                  <td>{client.yearlyIncome}</td>
                  <td>{client.entryDate}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default FindClient;