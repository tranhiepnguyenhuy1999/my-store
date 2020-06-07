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
                 <Col sx={9} md={5} className="title-modal m-2 p-4">
                   <h2 className="mb-2">Thông tin sản phẩm </h2>
                   <img src={modalItem.img} alt="Product"></img>
                  <h4 className="mb-2">{modalItem.title}</h4>
                  <div className="mb-2"><span>$</span> {modalItem.price}</div>
                   <Link to="/">
                       <Button variant="outline-primary" onClick={value.closeModal} className="mr-2"
                       >Go back</Button>{' '}
                   </Link>
                      <Button variant="outline-warning"  onClick={()=>value.handelIncart(modalItem)}>Add to cart</Button>{' '}                   
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

