// Home.js
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './Home.css'; // Import the external CSS file
import Header from '../../components/Header';

function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform search action here
        console.log("Searching for:", searchTerm);
    };

    return (
        <>
        <Header />
        <div className="background">
            <Container className="">
                <div className="search-box">
                    <Form onSubmit={handleSubmit} className="search-form">
                        <Row className="justify-content-center">
                            <Col xs="auto">
                                <Form.Group controlId="searchForm">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search Google..."
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs="auto">
                                <Button variant="outline-secondary" type="submit">
                                    Search
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </div>
        </>
    );
}

export default Home;
