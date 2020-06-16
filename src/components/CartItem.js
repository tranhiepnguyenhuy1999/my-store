import React, { Component } from 'react'
import MystoreContext from '../context/MystoreContext'
import {Row, Button} from 'react-bootstrap'
export default class CartItem extends Component {
    constructor(props){
        super(props);
        this.state={
            count : this.props.item.count,
        }
         this.onChangeCount=onChangeCount.bind(this);

        function onChangeCount(event){
            this.setState({
                count: event.target.value,
            })
            this.props.change(this.props.item, event.target.value)
        }
    }
    onKeyDownCount = (event)=>{
        if(event.keyCode<95 && event.keyCode>57)
                return event.preventDefault();
        if(event.keyCode===16)
        {
            console.log('hey')
          return event.preventDefault();  
        }
            
    }
    render() {
        const {item}=this.props;
        return (
            <MystoreContext.Consumer>
                    {value=>{
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
                        <input type="text" size="1"  className="text-center" onChange={this.onChangeCount}
                        onKeyDown={this.onKeyDownCount}></input>
                        <button onClick={()=>value.increasCartItem(item)}>+</button>
                        </td>
                        <td className="text-center"><Button variant="warning"
                        onClick={()=> value.removeCart(item)}><i class="fas fa-trash-alt"></i></Button>{' '}</td>
                        <td><span>Total: $</span>{item.total}</td>
                    </tr>
                    }}
            </MystoreContext.Consumer>
        )
    }
}
