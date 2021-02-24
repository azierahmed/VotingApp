import React from 'react'
import { Nav , Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoele1 from '../../assets/logoele1.png';

const Header = () => {
    const styles = {
        img: {
            width: "350px",
            height: "50px"
        },
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/"><img src={logoele1} alt="Logoele" style={styles.img} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="/valid">Voting</Nav.Link>
                        <Nav.Link href="/admin/presidential">Admin</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link> | </Nav.Link>
                        <Nav.Link eventKey={2} href="/register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
