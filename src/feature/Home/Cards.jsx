import React, { useState } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'; // Import star icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaDirections } from 'react-icons/fa'; // Import direction icon
import { MdOutlineInventory2 } from "react-icons/md";
import './Card.css'; // Import custom CSS for Card component
import InventoryModel from './InventoryModel';

const Cards = ({ data }) => {
    const [inventoryModel, setInventoryModel] = useState(false)
    const [modelData,setModelData] = useState(null)
    // Function to render star rating
    const handleClose = () => setInventoryModel(false)
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
    const handleOpenInventoryModel = (shop) => {
        setModelData(shop);
        setInventoryModel(true);
    };

    // Function to handle hover behavior
    const handleAddressHover = (event) => {
        const element = event.target;
        element.style.whiteSpace = 'normal';
        element.style.overflow = 'visible';
        element.style.textOverflow = 'inherit';
    };

    return (
        <>
        <Row xs={1} md={2} lg={4} className="g-4">
            {data.map((shop) => (
                <Col key={shop._id}>
                    <Card className="custom-card">
                        <div className="card-image-container">
                            <Card.Img
                                variant="top"
                                src={`http://localhost:8081/images/${shop.image}`}
                                alt={shop.shopName}
                                className="card-image"
                            />
                        </div>
                        <Card.Body className="card-body">
                            <Card.Title>{shop.shopName}</Card.Title>
                            <Card.Text className="address-text" title={shop.shopAddress}>
                                {shop.shopAddress}
                            </Card.Text>
                            <div className="rating">
                                {renderStars(shop.reviewsRatio).map((star, index) => (
                                    <span key={index}>{star}</span>
                                ))}
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <Link to={shop?.location} className="direction-link">
                                <Button variant="primary" className="circle-button">
                                    <FaDirections />
                                </Button>
                                <span className="direction-text">Direction</span>
                            </Link>
                            <Button variant="primary" className="circle-button" onClick={() => handleOpenInventoryModel(shop)}>
                                <MdOutlineInventory2 />
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>
        <InventoryModel show={inventoryModel} handleClose={handleClose} data={modelData} />
  </>
    );
};

export default Cards;
