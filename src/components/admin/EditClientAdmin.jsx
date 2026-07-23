import React, { useState } from 'react';
import { Card, Form, Button, Table, Badge } from 'react-bootstrap';

const EditClientAdmin = () => {
    return (
        <Card className="shadow-sm border-0">
            <Card.Header as="h5" className="bg-danger text-white">EDIT CLIENT (Modify / Delete)</Card.Header>
            <Card.Body>
                <Form.Control type="text" placeholder="Search client by name or VAT number..." className="mb-3" />
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Legal Name</th>
                            <th>VAT Number</th>
                            <th>Actions (Admin)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>123-abc</td>
                            <td>Enterprise SRL</td>
                            <td>12345678901</td>
                            <td>
                                <Button variant="warning" size="sm" className="me-2">Edit</Button>
                                <Button variant="danger" size="sm">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default EditClientAdmin;