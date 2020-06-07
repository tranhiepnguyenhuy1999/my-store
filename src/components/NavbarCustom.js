import React, { Component } from 'react'
import {Row, Container, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class NavbarCustom extends Component {
    render() {
        return (
                <Container fluid className="p-3 bg-primary text-light">
                <Row>
                    <Col sx={2} className="ml-2">
                        <Link  to="/">
                        <Button variant="success" >MY STORE</Button>{' '}
                        </Link>
                    </Col>
                    <Col sx={8}>
                        <h2>CỬA TIỆM CỦA HUY</h2>
                    </Col>
                    <Col sx={2}>
                        <Row className="justify-content-end">
                            <Link to="/cart">
                            <Button variant="warning" className="mr-4"><i class="fas fa-cart-plus"></i> Giỏ hàng</Button>{' '}
                            </Link>
                        </Row>
                    
                    </Col>
                </Row>
                </Container>
        )
    }
}
