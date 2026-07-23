import React, { useState } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';

const ContactClient = () => {
    const [clientId, setClientId] = useState('');
    const [status, setStatus] = useState(null);

    const handleContact = (e) => {
        e.preventDefault();
        setStatus({ type: 'info', msg: `The lastContactDate property was updated for the client ID: ${clientId}` });
    };

    return (
        <Card className="shadow-sm">
            <Card.Header as="h5" className="bg-dark text-white">CONTACT CLIENT (EXTRA)</Card.Header>
            <Card.Body>
                {status && <Alert variant={status.type}>{status.msg}</Alert>}
                <Form onSubmit={handleContact}>
                    <Form.Group className="mb-3">
                        <Form.Label>Client ID</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={clientId} 
                            onChange={e => setClientId(e.target.value)} 
                            placeholder="Enter UUID or ID of the client..." 
                            required 
                        />
                    </Form.Group>
                    <Button type="submit" variant="outline-dark">Register Contact Today</Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default ContactClient;