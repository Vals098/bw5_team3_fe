import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Spinner, Alert } from 'react-bootstrap';

const MyProfile = () => {
    const [profile, setProfile] = useState({ name: '', surname: '', email: '', username: '' });
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState(null);

    const token = localStorage.getItem('token');
    const API_URL = 'http://localhost:8080/employees/me';

    useEffect(() => {
        fetch(API_URL, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => res.json())
            .then(data => { setProfile(data); setLoading(false); })
            .catch(() => setLoading(false));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ type: 'success', msg: 'Profile updated successfully.' });
    };

    if (loading) return <Spinner animation="border" variant="primary" />;

    return (
        <Card className="shadow-sm">
            <Card.Header as="h5" className="bg-primary text-white">MY PROFILE</Card.Header>
            <Card.Body>
                {status && <Alert variant={status.type}>{status.msg}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={profile.name || ''} onChange={e => setProfile({...profile, name: e.target.value})} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="text" value={profile.surname || ''} onChange={e => setProfile({...profile, surname: e.target.value})} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={profile.email || ''} disabled />
                    </Form.Group>
                    <Button type="submit" variant="primary">Save Changes</Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default MyProfile;