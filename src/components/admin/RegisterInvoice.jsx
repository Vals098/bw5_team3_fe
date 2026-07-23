import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const RegisterInvoice = () => (
    <Card className="shadow-sm">
        <Card.Header as="h5" className="bg-warning text-dark">REGISTER NEW INVOICE</Card.Header>
        <Card.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Select Client</Form.Label>
                    <Form.Select><option>Select a client...</option></Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Amount (€)</Form.Label>
                    <Form.Control type="number" step="0.01" required />
                </Form.Group>
                <Button variant="warning" type="submit">Upload Invoice</Button>
            </Form>
        </Card.Body>
    </Card>
);

export default RegisterInvoice;