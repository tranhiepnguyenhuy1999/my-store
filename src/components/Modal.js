import React, { Component } from 'react'
import './Modal.css'
import { Container, Col, Row, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import MystoreContext from '../context/MystoreContext'
export default class Modal extends Component {
  render() {
    return (
      <MystoreContext.Consumer>
        {value=>{
          const {modalItem}=value
           if (value.modal)
           return <Row className="modal-detail justify-content-center align-items-center">   
           <Container className="p-2">
             <Row className="justify-content-center align-items-end">
                 <Col sx={9} md={5} className="title-modal m-2">
                   <h2>Info Product</h2>
                   <img src={modalItem.img} alt="Product"></img>
                  <h4>{modalItem.title}</h4>
                  <div><span>$</span> {modalItem.price}</div>
                   <Link to="/">
                       <Button variant="outline-primary" onClick={value.closeModal}
                       >Go back</Button>{' '}
                   </Link>
                   <Button variant="outline-warning" onClick={()=>value.handelIncart(modalItem)}>Add to cart</Button>{' '}
                 </Col>
             </Row>      
           </Container>       
         </Row>
         else 
         return null;
        }}
      </MystoreContext.Consumer>
      
    )
  }
}

