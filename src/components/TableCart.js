import React, { Component } from 'react'
import { Container, Table, Button, Col, Row } from 'react-bootstrap'
import MystoreContext from '../context/MystoreContext'
import './TableCart.css'
export default class TableCart extends Component {
    constructor(){
        super();
        this.state={
            itemCart : 0,
        }
        onChangeCount=onChangeCount.bind(this)
        function onChangeCount(event){
            if(event.keyCode<=95 || event.keyCode >=106)
            {
                event.preventDefault();
            }
            else 
            this.setState(()=>{
                return {count: event.target.value}
            })
        }
    }
        

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
                                        return <tr>
                                            <td>
                                                <Row className="justify-content-center">
                                                     <div className="cart-frame">
                                                    <img src={item.img} alt="Product" className="cart-img"></img>
                                                    </div>
                                                </Row>
                                            </td>
                                            <td>{item.title}</td>
                                            <td className="text-center"><span>$</span>{item.price}</td>
                                            <td className="text-center">
                                            <button onClick={()=>value.descreasCartItem(item)}>-</button>
                                            <input type="text" size="3" value={item.count} className="text-center" onChange={this.onChangeCount}></input>
                                            <button onClick={()=>value.increasCartItem(item)}>+</button>
                                        </td>
                                            <td className="text-center"><Button variant="warning"
                                            onClick={()=> value.removeCart(item)}><i class="fas fa-trash-alt"></i></Button>{' '}</td>
                                            <td><span>Total: $</span>{item.total}</td>
                                        </tr>

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
