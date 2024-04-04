// Header.js
import React from 'react';
import { Container } from 'react-bootstrap';
import './Header.css'; // Import the external CSS file

function Header({ userName }) {
    return (
        <header className="header">
            <Container>
                <div className="header-content">
                    <div className="logo">Your Logo</div>
                    <div className="user">{userName}abhi</div>
                </div>
            </Container>
        </header>
    );
}

export default Header;
