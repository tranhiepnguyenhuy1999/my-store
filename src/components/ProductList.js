import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Product from './Product'
import MystoreContext from '../context/MystoreContext' 
import './Product.css'
export default class ProductList extends Component {
    render() {
        return (
            <Container className="mt-3">
                        <Container fuild>
                        <Col sx={12} className="mb-4">
                            <img src="img/Deal.png" className="productlist-deal" alt="deal"></img>
                        </Col>
                            
                        </Container>
                        <Row>
                            <MystoreContext.Consumer>
                                {
                                (value) =>{
                                    return value.products.map((item)=>{
                                    return <Col sx={6} md={4}>
                                        <Product product={item}></Product>
                                    </Col>
                                    })
                                    }
                                }
                            </MystoreContext.Consumer>
                        </Row>
            </Container>
        )
    }
}