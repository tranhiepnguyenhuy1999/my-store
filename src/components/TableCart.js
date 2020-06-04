import React, { Component } from 'react'
import { Container, Table, Button, Col } from 'react-bootstrap'
import MystoreContext from '../context/MystoreContext'
import './TableCart.css'
export default class TableCart extends Component {
    render() {
        return (

            <Container className="mt-3">
                <MystoreContext.Consumer>
                    {value => {
                        if (value.cart.length === 0)
                            return <h1>There is no product in cart</h1>
                        else
                            return <Table striped bordered hover className="col-12">
                                <thead>
                                    <tr>
                                        <th ><Col sx={2} className="text-align-center">Product</Col></th>
                                        <th><Col sx={4}>Name </Col></th>
                                        <th><Col sx={2}>Price</Col></th>
                                        <th><Col sx={1}>Quantity</Col></th>
                                        <th><Col sx={1}>Remove</Col></th>
                                        <th><Col sx={2}>Total</Col></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {value.cart.map((item) => {
                                        return <tr>
                                            <td>
                                                <div className="cart-frame">
                                                <img src={item.img} alt="Product" className="cart-img"></img>
                                                </div>
                                            </td>
                                            <td>{item.title}</td>
                                            <td><span>$</span>{item.price}</td>
                                            <td>X</td>
                                            <td><Button variant="warning">Undo</Button>{' '}</td>
                                            <td>{item.total}</td>
                                        </tr>

                                    })
                                    }

                                </tbody>
                            </Table>
                    }}

                </MystoreContext.Consumer>
            </Container>

        )
    }
}
