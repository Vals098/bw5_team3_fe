import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table, Alert, Card, InputGroup } from 'react-bootstrap';

const MenuUser = () => {
    
    const [formData, setFormData] = useState({
        ragioneSociale: '',
        partitaIva: '',
        email: ''
    });

    
    const [clienti, setClienti] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [message, setMessage] = useState({ type: '', text: '' });

    
    const API_URL = 'http://localhost:8080'; 
    const token = localStorage.getItem('token'); 
    
    useEffect(() => {
        fetchClienti();
    }, []);

    // GET /clienti
    const fetchClienti = async () => {
        try {
            const response = await fetch(`${API_URL}/clienti`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error('Error to load list of clients');
            const data = await response.json();
            setClienti(data.content || data); 
        } catch (error) {
            console.error(error);
        }
    };

    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // POST /clienti (Create new Client)
    const handleCreateCliente = async (e) => {
        e.preventDefault();
        setMessage({ type: '', text: '' });

        try {
            const response = await fetch(`${API_URL}/clienti`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setMessage({ type: 'success', text: 'Client created with succesfully' });
                setFormData({ ragioneSociale: '', partitaIva: '', email: '' }); 
                fetchClienti(); // 
            } else {
                const errorData = await response.json();
                setMessage({ type: 'danger', text: errorData.message || 'Error to create client' });
            }
        } catch (error) {
            setMessage({ type: 'danger', text: 'Error to connect with the serverr' });
        }
    };

    // Filter ("cerca clienti")
    const filteredClienti = clienti.filter(cliente => 
        cliente.ragioneSociale?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cliente.partitaIva?.includes(searchQuery)
    );

    return (
        <Container className="mt-4">
            <h2 className="mb-4">Menu User - Management of Clients</h2>

            {message.text && (
                <Alert variant={message.type} onClose={() => setMessage({ type: '', text: '' })} dismissible>
                    {message.text}
                </Alert>
            )}

            <Row className="g-4">
                {/* Step 1: Create new client */}
                <Col md={5}>
                    <Card className="shadow-sm">
                        <Card.Header as="h5" className="bg-primary text-white">
                            Creare nuovo cliente
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleCreateCliente}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Razón Social</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="ragioneSociale"
                                        value={formData.ragioneSociale}
                                        onChange={handleChange}
                                        placeholder="Ej: Tech Solutions SRL"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Partita IVA</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="partitaIva"
                                        value={formData.partitaIva}
                                        onChange={handleChange}
                                        placeholder="Ej: 12345678901"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="example@client.com"
                                        required
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100">
                                    Save Client
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                {/*2: Cerca e lista clienti */}
                <Col md={7}>
                    <Card className="shadow-sm">
                        <Card.Header as="h5" className="bg-secondary text-white">
                            Cerca clienti
                        </Card.Header>
                        <Card.Body>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Search by Legal Name or VAT Number..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </InputGroup>

                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Legal Name</th>
                                        <th>VAT Number</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredClienti.length > 0 ? (
                                        filteredClienti.map((cliente, index) => (
                                            <tr key={cliente.id || index}>
                                                <td>{cliente.ragioneSociale}</td>
                                                <td>{cliente.partitaIva}</td>
                                                <td>{cliente.email}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3" className="text-center text-muted">
                                                Clients not found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default MenuUser;