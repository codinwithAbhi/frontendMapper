import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'; // Import star icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaDirections } from 'react-icons/fa'; // Import direction icon
import "./Card.css"

const Cards = ({ data }) => {
    // Function to render star rating
    const renderStars = (reviewsRatio) => {
        const fullStars = Math.floor(reviewsRatio);
        const hasHalfStar = reviewsRatio % 1 !== 0;
        const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<BsStarFill key={i} />);
        }

        if (hasHalfStar) {
            stars.push(<BsStarHalf key={fullStars} />);
        }

        for (let i = 0; i < remainingStars; i++) {
            stars.push(<BsStar key={fullStars + (hasHalfStar ? 1 : 0) + i} />);
        }

        return stars;
    };

    return (
        <Row xs={1} md={2} lg={4} className="g-4">
            {data.map((shop) => (
                <Col key={shop._id}>
                    <Card style={{ width: '18rem' }}>
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                            <Card.Img variant="top" src={`http://localhost:8081/images/${shop.image}`} alt={shop.shopName} style={{ objectFit: 'cover', height: '100%' }} />
                        </div>
                        <Card.Body>
                            <Card.Title>{shop.shopName}</Card.Title>
                            <Card.Text>{shop.shopAddress}</Card.Text>
                            <div className="rating">
                                {renderStars(shop.reviewsRatio).map((star, index) => (
                                    <span key={index}>{star}</span>
                                ))}
                            </div>

                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col md={2}>
                                    <Link style={{ textDecoration: "none", display: 'flex', flexDirection: 'column', alignItems: 'center' }} to={shop?.location}>
                                        <Button variant="primary" className="circle-button">
                                            <FaDirections />
                                            <span style={{ fontSize: '12px' }}>Direction</span>
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>

                        </Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default Cards;
