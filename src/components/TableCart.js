import React, { Component } from 'react'
import { Container, Table, Button, Col, Row } from 'react-bootstrap'
import MystoreContext from '../context/MystoreContext'
import CardItem from './CartItem'
import './TableCart.css'
export default class TableCart extends Component {
    render() {
        return(
            <Container className="mt-3">
                <MystoreContext.Consumer>
                    {value => {
                        if (value.cart.length === 0)
                            return <Container className="rt-5">
                                <h1 className="text-center">Hiện tại không có sản phẩm nào trong giỏi hàng</h1>
                            </Container>
                        else
                            return<Table striped bordered hover className="col-12">
                                <thead>
                                    <tr>
                                        <th className="text-center"><Col sx={2}>Product</Col></th>
                                        <th className="text-center"><Col sx={4}>Name </Col></th>
                                        <th className="text-center"><Col sx={2}>Price</Col></th>
                                        <th className="text-center"><Col sx={1}>Quantity</Col></th>
                                        <th className="text-center"><Col sx={1}>Remove</Col></th>
                                        <th className="text-center"><Col sx={2}>Total</Col></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {value.cart.map((item) => {
                                        return<CardItem item={item} change={value.changeIncart}>
                                        </CardItem> 
                                    })
                                    }

                                </tbody>
                            </Table>
                    }}

                </MystoreContext.Consumer>
                <MystoreContext.Consumer>
                    {(value)=>{
                        if (value.cart.length === 0) return null;
                        return<Container>
                            <Row sx={12} className="justify-content-end mb-2">
                            <Button variant="danger" onClick={value.clearCart}>Xóa giỏ hàng</Button>
                            </Row>
                            <Row sx={12} className="justify-content-end">
                                <h4>Total Cart : $ {value.totalCart}</h4>
                            </Row>
                            <Row sx={12} className="justify-content-end">
                            <Button variant="primary">Thanh Toán</Button>
                            </Row>
                        </Container>
                        
                    }}
                </MystoreContext.Consumer>
            </Container>

        )
    }
}
