import React, { useState } from 'react';
import { Card, Form, Table } from 'react-bootstrap';

const FindClient = () => {
    const [search, setSearch] = useState('');

    return (
        <Card className="shadow-sm">
            <Card.Header as="h5" className="bg-secondary text-white">FIND CLIENT</Card.Header>
            <Card.Body>
                <Form.Control 
                    type="text" 
                    placeholder="Search client by legal name or VAT number..." 
                    className="mb-3"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <Table striped bordered hover responsive>
                    <thead>
                        <tr><th>ID</th><th>Legal Name</th><th>VAT Number</th><th>Actions</th></tr>
                    </thead>
                    <tbody>
                        <tr><td colSpan="4" className="text-center text-muted">Apply a filter to search.</td></tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default FindClient;