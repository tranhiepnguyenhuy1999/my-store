import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import MystoreContext from '../context/MystoreContext'
import {Link} from 'react-router-dom'

export default class Details extends Component {
    render() {
        return (
            <Container>
                <MystoreContext.Consumer>
                    {value=>{
                        const {img, title, company, info, inCart} =value.productDetail;
                        return (
                                <Container>
                                    <Col className="mb-5 mt-5">
                                        <h1 className="text-center">{title}</h1>
                                    </Col>
                                    <Row>
                                    <Col sx={12} md={6}>
                                        <img src={img} alt="Product in detail"></img>
                                    </Col>
                                    <Col>
                                    <h3 className="mb-3">Name: {title}</h3>
                                    <h4  className="mb-3">Company:{company}</h4>
                                    <div  className="mb-3">{info}</div>
                                    <div className="mt-3">
                                    
                                        <Link to="/">
                                            <Button variant="primary">Trở về trang bán hàng</Button>{' '}
                                        </Link>
                                        {(inCart)?<Button variant="warning" disabled>Thêm vào giỏ</Button>:<Button variant="warning" onClick={()=>value.handelIncart(value.productDetail)}>Add to cart</Button>}                                        
                                    </div>
                                    
 
                                    </Col>
                                    </Row>
                                </Container>
                               )
                    }}
                </MystoreContext.Consumer>
                
            </Container>
        )
    }
}
