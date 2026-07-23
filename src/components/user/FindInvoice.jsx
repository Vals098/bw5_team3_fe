import React from 'react';
import { Card, Form, Table, Row, Col } from 'react-bootstrap';

const FindInvoice = () => (
    <Card className="shadow-sm">
        <Card.Header as="h5" className="bg-info text-white">FIND INVOICE</Card.Header>
        <Card.Body>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Control type="text" placeholder="Filtrar por ID Cliente o Año..." />
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr><th>Invoice Number</th><th>Date</th><th>Amount</th><th>Status</th></tr>
                </thead>
                <tbody>
                    <tr><td colSpan="4" className="text-center text-muted">No invoices to display</td></tr>
                </tbody>
            </Table>
        </Card.Body>
    </Card>
);

export default FindInvoice;