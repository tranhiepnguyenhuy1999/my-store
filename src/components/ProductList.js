import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Product from './Product'
import MystoreContext from '../context/MystoreContext' 
export default class ProductList extends Component {
    render() {
        return (
            <Container className="mt-3">
                        <Container fuild>
                            <img src="" alt="deal"></img>
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
