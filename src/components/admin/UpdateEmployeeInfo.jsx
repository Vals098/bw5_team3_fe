import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';

const UpdateEmployeeInfo = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [formData, setFormData] = useState({ name: '', surname: '', email: '', role: '' });
    const [status, setStatus] = useState(null);

    const handleUpdate = (e) => {
        e.preventDefault();
        setStatus({ type: 'success', msg: `Empleado ${employeeId} actualizado correctamente.` });
    };

    return (
        <Card className="shadow-sm border-0">
            <Card.Header as="h5" className="bg-danger text-white">UPDATE EMPLOYEE INFO</Card.Header>
            <Card.Body>
                {status && <Alert variant={status.type}>{status.msg}</Alert>}
                <Form onSubmit={handleUpdate}>
                    <Form.Group className="mb-3">
                        <Form.Label>ID / UUID employee</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ingrese UUID del empleado a modificar..." 
                            value={employeeId} 
                            onChange={e => setEmployeeId(e.target.value)} 
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>New Name</Form.Label>
                        <Form.Control type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>New Surname</Form.Label>
                        <Form.Control type="text" value={formData.surname} onChange={e => setFormData({...formData, surname: e.target.value})} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>New Email</Form.Label>
                        <Form.Control type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>New Role</Form.Label>
                        <Form.Control type="text" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} />
                    </Form.Group>
                    <Button type="submit" variant="danger">Update Employee</Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default UpdateEmployeeInfo;