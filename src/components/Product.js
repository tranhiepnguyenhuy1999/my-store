import React, { Component } from 'react'
import { Card} from 'react-bootstrap'
import './Product.css'
import {Link} from 'react-router-dom'
import MystoreContext from '../context/MystoreContext'
export default class Product extends Component {
    render(){
        const {title, price, img, inCart} =this.props.product;
        const {product}= this.props;
        return (
            <MystoreContext.Consumer>
                { value =>{
                    return(
                        <Card style={{ width: '18rem' }} className="mb-3">
                           
                                <div className="product-item" onClick={() => value.getItemtoproductdetail(product)}>
                                <Link to="/detail">
                                <Card.Img variant="top" src={img} className="product-img"/>
                                </Link>
                                {(inCart)?<button className="btn-Incart" disabled>Incart</button>:<button className="btn-Incart" onClick={()=>value.changeOpenModal(product)}>
                                    <i class="fas fa-cart-plus"></i>
                                </button>
                                }
                                </div>
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    <span>$ </span>{price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                }}
            </MystoreContext.Consumer>
            
        )
    }
}
