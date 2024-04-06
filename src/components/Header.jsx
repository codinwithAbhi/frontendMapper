// Header.js
import React, { useContext, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import './Header.css'; // Import the external CSS file
import { DataContext } from './contexts';
import { Link, useNavigate } from "react-router-dom";


function Header() {
    const navigate = useNavigate();
    const { auth, setAuth } = useContext(DataContext)
    const userName = localStorage.getItem('access-token')
    const name = JSON.parse(userName)
    useEffect(()=>{
       if(!auth){
        navigate('/login')
       }
    },[auth])
    const handleLogout = () => {
        localStorage.removeItem('access-token')
        setAuth(false)
    }
    return (
        <header className="header">
            <Container>
                <div className="header-content">
                    {name && <div className="logo">{name.firstName}</div>}
                    <Button variant='primary' onClick={handleLogout}>LogOut</Button>
                </div>
            </Container>
        </header>
    );
}

export default Header;
