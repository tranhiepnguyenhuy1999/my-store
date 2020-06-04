import React, { Component } from 'react'
import MystoreContext from './MystoreContext'
import {storeProducts} from '../data'
export default class Mystore extends Component {
    constructor(props){
        super(props);
        this.state={      
            products :[],
            productDetail :[],
            modal: false,
            modalItem: [],
            cart: [],
        };
      
    } 
    componentDidMount(){
        let tempproducts = storeProducts;
        this.setState(()=>{
            return {products: tempproducts} 
        })
    }
    handelIncart =(item) =>{
            const tempProducts = [...this.state.products];
            let index = tempProducts.indexOf(item);
            let product=tempProducts[index];
            product.inCart= true;
            product.count=1;
            product.total=product.price;
            this.setState(()=>{
                return{
                    products: tempProducts, cart: [...this.state.cart, product]
                }
            })
            this.closeModal();
    }
    changeIncart=(item)=>{
    }
    getItemtoproductdetail =(product)=>{
        this.setState(()=>{return {
            productDetail: product,
        }}) 
    }
    changeOpenModal =(item) =>{
        this.setState(()=>{
            return{modal: true,}
        })
        this.setState(()=>{
            return{modalItem: item,}
        })
    }
    closeModal=()=>{
        this.setState(()=>{
            return{modal: false,}
        })
    }
    render() {
        return (
            <MystoreContext.Provider value={{
            ...this.state,
            handelIncart:this.handelIncart,
            getItemtoproductdetail: this.getItemtoproductdetail,
            changeOpenModal: this.changeOpenModal,
            closeModal: this.closeModal,
            } }>
                {this.props.children}
            </MystoreContext.Provider>
        )
    }
}
