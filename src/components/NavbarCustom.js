import React, { Component } from 'react'
import {Nav, Navbar, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class NavbarCustom extends Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Link to="/">
                  <Navbar.Brand>My store</Navbar.Brand>  
                </Link>
                
                <Nav className="mr-auto">
                    <Nav className="jusify-content-end">
                        <Link to="/cart">
                         <Button variant="success">Cart</Button>{' '}    
                        </Link>
                    
                    </Nav>          
                </Nav>
            </Navbar>
        )
    }
}
