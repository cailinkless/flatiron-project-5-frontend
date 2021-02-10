import React from 'react' // grab ability to use react
import Nav from 'react-bootstrap/Nav' // grab styled Nav elements
import Navbar from 'react-bootstrap/Navbar' // grab styled Navbar elements

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