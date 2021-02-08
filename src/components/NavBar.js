import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {
    return (
        <div className="NavBar">
            <Navbar bg="dark" variant="dark">
                <Nav>
                <Nav.Link href="/">My Playbills</Nav.Link>
                <Nav.Link href="/playbills/new">Start New Playbill</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}


export default NavBar;