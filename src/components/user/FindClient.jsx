import React, { useState } from "react"
import { Card, Form, Table, Row, Col, Button, Alert } from "react-bootstrap"

const FindClient = () => {
  const token = localStorage.getItem("token")

  const [legalName, setLegalName] = useState("")
  const [yearlyIncome, setYearlyIncome] = useState("")
  const [entryDate, setEntryDate] = useState("")
  const [lastContactDate, setLastContactDate] = useState("")

  const [orderBy, setOrderBy] = useState("legalName")

  const [clients, setClients] = useState([])
  const [message, setMessage] = useState(null)

  const handleSearch = async () => {
    try {
      const params = new URLSearchParams()

      params.append("page", 0)
      params.append("size", 20)
      params.append("orderBy", orderBy)

      if (legalName !== "") {
        params.append("legalName", legalName)
      }

      if (yearlyIncome !== "") {
        params.append("yearlyIncome", yearlyIncome)
      }

      if (entryDate !== "") {
        params.append("entryDate", entryDate)
      }

      if (lastContactDate !== "") {
        params.append("lastContactDate", lastContactDate)
      }

      const response = await fetch(
        `http://localhost:8080/clients?${params.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      if (!response.ok) {
        throw new Error("Unable to retrieve clients.")
      }

      const data = await response.json()

      setClients(data.content)
      setMessage(null)
    } catch (error) {
      setClients([])
      setMessage(error.message)
    }
  }
  return (
    <Card className="shadow-sm">
      <Card.Header as="h5" className="bg-secondary text-white">
        FIND CLIENT
      </Card.Header>

      <Card.Body>
        {message && <Alert variant="danger">{message}</Alert>}

        <Row className="g-3 mb-4">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Legal Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert legal name..."
                value={legalName}
                onChange={(e) => setLegalName(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group>
              <Form.Label>Maximum Yearly Income</Form.Label>
              <Form.Control
                type="number"
                placeholder="Insert yearly income..."
                value={yearlyIncome}
                onChange={(e) => setYearlyIncome(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group>
              <Form.Label>Entry Date</Form.Label>
              <Form.Control
                type="date"
                value={entryDate}
                onChange={(e) => setEntryDate(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group>
              <Form.Label>Last Contact Date</Form.Label>
              <Form.Control
                type="date"
                value={lastContactDate}
                onChange={(e) => setLastContactDate(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Sort By</Form.Label>
              <Form.Select
                value={orderBy}
                onChange={(e) => setOrderBy(e.target.value)}
              >
                <option value="legalName">Legal Name</option>
                <option value="yearlyIncome">Yearly Income</option>
                <option value="entryDate">Entry Date</option>
                <option value="lastContactDate">Last Contact Date</option>
                <option value="province">Province</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6} className="d-flex align-items-end">
            <Button className="w-100" variant="primary" onClick={handleSearch}>
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
  )
}

export default FindClient
