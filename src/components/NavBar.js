import React from 'react' // grab ability to use react
import Nav from 'react-bootstrap/Nav' // grab styled Nav elements
import Navbar from 'react-bootstrap/Navbar' // grab styled Navbar elements
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const style = {
        color: "#FFFFFF"
    }
    const activeStyle = {
        color: "#537b51"
    }
    return (
        <div className="NavBar">
            <Navbar bg="dark" variant="dark">
                <Nav>
                <NavLink exact style={style} activeStyle={activeStyle} to="/">My Playbills</NavLink>
                <NavLink exact style={style} activeStyle={activeStyle} to="/playbills/new">Start New Playbill</NavLink>
                </Nav>
            </Navbar>
        </div>
    )
}


export default NavBar;