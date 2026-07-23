import React, { useState } from 'react';
import { Card, Form, Button, Table } from 'react-bootstrap';

const EditInvoiceAdmin = () => {
    return (
        <Card className="shadow-sm border-0">
            <Card.Header as="h5" className="bg-danger text-white">EDIT INVOICE (Modify / Delete)</Card.Header>
            <Card.Body>
                <Form.Control type="text" placeholder="Search invoice by number or ID..." className="mb-3" />
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Invoice Number</th>
                            <th>Amount (€)</th>
                            <th>Status</th>
                            <th>Actions (Admin)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>FATT-2026-001</td>
                            <td>1,500.00</td>
                            <td>PAGADA</td>
                            <td>
                                <Button variant="warning" size="sm" className="me-2">Edit Status</Button>
                                <Button variant="danger" size="sm">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default EditInvoiceAdmin;