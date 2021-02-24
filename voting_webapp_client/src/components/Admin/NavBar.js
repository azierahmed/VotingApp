import React from 'react'
import { Nav , Navbar, Link } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Presidential from './Presidential'
import Legislative from './Legislative'
import Users from './Users'


const NavBar = () => {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navbaricon" >
                        <Nav.Link href="/admin/presidential">Presidential</Nav.Link>
                        <Nav.Link> | </Nav.Link>
                        <Nav.Link eventKey={2} href="/admin/legislative/region/Jerusalem">Legislative</Nav.Link>
                        <Nav.Link> | </Nav.Link>
                        <Nav.Link eventKey={3} href="/admin/users">Users Status</Nav.Link>
                        <Nav.Link> | </Nav.Link>
                        <Nav.Link eventKey={4} href="/">Main Page</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
