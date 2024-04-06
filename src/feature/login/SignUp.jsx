import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { createUser } from '../../services/auth.service';
import { Link, useNavigate } from "react-router-dom";
import './SignUp.css';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createUser(formData);
            if (response.status === 200) {
                navigate('/login')
            }
        } catch (error) {
            console.error('Signup failed:', error.message);
        }
    };

    return (
        <Container className="signup-container">
            <h1 className="signup-heading">Sign Up</h1>
            <Form className="signup-form" onSubmit={handleSubmit}>
                <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="signup-button mt-2">
                    Sign Up
                </Button>
            </Form>
        </Container>
    );
}

export default SignUp;
