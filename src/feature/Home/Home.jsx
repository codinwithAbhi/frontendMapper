// Home.js
import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './Home.css'; // Import the external CSS file
import Header from '../../components/Header';
import Cards from './Cards';
import { getShops } from '../../services/shops.service';
import Select from 'react-select';
import toast from "react-hot-toast"

const selectOption = [
    { label: "Pune", value: "pune" }
];

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity,setSelectedCity] = useState(null)
    const [shopsData,setShopsData] = useState([])
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        const response = await getShops(searchTerm,selectedCity?.value);
        if(response.status===200 && response.data.data.length >0){
            toast.success("Search data fetched")
            setShopsData(response.data.data);
        }
    };

  

    return (
        <>
            <Header />
            <div className="background">
                <Container>
                    <div className="search-box">
                        <Form onSubmit={handleSubmit} className="search-form">
                            <Row className="align-items-center">
                                <Col md={4}>
                                    <Select
                                     options={selectOption}
                                     onChange={(selected)=> setSelectedCity(selected)}
                                     />
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="searchForm" className="mb-0">
                                        <Form.Control
                                            type="text"
                                            placeholder="Search Google..."
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={2} className="text-center">
                                    <Button variant="outline-secondary" type="submit">
                                        Search
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div className='mt-5'>
                     
                        <Cards data={shopsData} />
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Home;
