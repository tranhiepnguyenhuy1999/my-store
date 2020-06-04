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
                                    <Col className="mb-4 mt-5">
                                        <h1>{title}</h1>
                                    </Col>
                                     <Row>
                                    <Col sx={12} md={6}>
                                        <img src={img} alt="Product in detail"></img>
                                    </Col>
                                    <Col>
                                    <h3>Name: {title}</h3>
                                    <h4>Company:{company}</h4>
                                    <div>{info}</div>
                                    <div className="mt-2">
                                    
                                        <Link to="/">
                                            <Button variant="primary">Go back to Products</Button>{' '}
                                        </Link>
                                        {(inCart)?<Button variant="warning" disabled>Add to cart</Button>:<Button variant="warning" onClick={()=>value.handelIncart(value.productDetail)}>Add to cart</Button>}
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
