import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Product from './Product'
import {Link} from 'react-router-dom'
import MystoreContext from '../context/MystoreContext' 
import './Product.css'
export default class ProductList extends Component {
    render() {
        return (
            <Container className="mt-3">
                        <MystoreContext.Consumer>
                            {value=>{
                                return<Container fuild>
                        
                                 <Col sx={12} className="mb-4">
                                     <Link to="/detail">
                                     <img src="img/Deal.jpg" className="productlist-deal" alt="deal" onClick={value.dealProductDetail}></img>
                                     </Link>
                                </Col>
                                    </Container>
                            }}
                        </MystoreContext.Consumer>
                
                        <Row>
                            <MystoreContext.Consumer>
                                {
                                (value) =>{
                                    return value.products.map((item)=>{
                                    return< Col sx={12} md={4} className="mb-3">
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