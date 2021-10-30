import React from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const { user, logOut } = useAuth();


    return (

        <>
            <Navbar fixed="top" className='header ' collapseOnSelect expand="lg" bg-transparent>
                <Container>
                    <Navbar.Brand href="#home">Vacaday-Travel-Agency</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end nav">
                        <Nav.Link as={HashLink} to="/home#home" >Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#others">Others</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#bestDeal">Best Deal</Nav.Link>
                        {user?.email ?

                            <Button onClick={logOut} className="me-4" variant="info">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                        <Navbar.Text>
                            USER <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;