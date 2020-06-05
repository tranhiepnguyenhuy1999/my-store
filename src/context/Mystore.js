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
            totalCart: 0,
        };
      
    } 
    componentDidMount(){
     this.setProducts();
    }
    setProducts =()=>{
        let tempproducts=[];
        storeProducts.map((item)=>{
                let singelItem ={...item};
                tempproducts=[...tempproducts, singelItem];
            })
            this.setState(()=>{
                return{products: tempproducts}
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
            },
            ()=>this.addTotalCart(),
            )
            this.closeModal();
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
    removeCart=(item)=>{
        const tempCart = [...this.state.cart];
        let index= tempCart.indexOf(item);
        tempCart.splice(index,1);
        this.setState(()=>{
            return {cart: tempCart}
        },()=>this.addTotalCart(),)
        this.fixRemovedProduct(item)

    }
    increasCartItem=(item)=>{
        const tempCart = [...this.state.cart];
        let index= tempCart.indexOf(item);
        tempCart[index].count=tempCart[index].count+1;
        tempCart[index].total=tempCart[index].count * tempCart[index].price;
        this.setState(()=>{
            return {cart : tempCart}
        },()=>this.addTotalCart(),)
    }
    descreasCartItem=(item)=>{
        const tempCart = [...this.state.cart];
        let index= tempCart.indexOf(item);
        tempCart[index].count===1?tempCart[index].count=1:tempCart[index].count=tempCart[index].count-1;
        tempCart[index].total=tempCart[index].count * tempCart[index].price;
        this.setState(()=>{
            return {cart : tempCart}
        },()=>this.addTotalCart(),)
    }
    fixRemovedProduct=(item)=>{
        const tempProducts= [...this.state.products]
        let removed= tempProducts.find( element => element.id === item.id)
        let index= tempProducts.indexOf(removed);
        tempProducts[index].inCart=false;
        tempProducts[index].count=0;
        tempProducts[index].total=0;
        this.setState(()=>{
            return {products: tempProducts,}
        })
    }
    addTotalCart=()=>{
        let total=0;
        const totalcart =[...this.state.cart]
        totalcart.map((item)=> total=item.total+total);
        this.setState(()=>{
            return {totalCart : total};
        })
    }
    clearCart=()=>{
        this.setState(()=>{
            return {cart:[], totalCart:0, productDetail:[]}
        })
        this.setState(()=>{
            this.setProducts()
        })
    }
    // onChangeCount=(event,item)=>{
    //     if(event.keyCode<=95 || event.keyCode >=106)
    //     {
    //         event.preventDefault();
    //     }
    //     else 
    //     {
    //     const tempCart = [...this.state.cart];
    //     let index= tempCart.indexOf(item);
    //     tempCart[index].count=event.target.value;
    //     tempCart[index].total=event.target.value * tempCart[index].price;
    //     this.setState(()=>{
    //         return {cart : tempCart}
    //     })
    //     }
        
    // }
    render() {
        return (
            <MystoreContext.Provider value={{
            ...this.state,
            handelIncart:this.handelIncart,
            getItemtoproductdetail: this.getItemtoproductdetail,
            changeOpenModal: this.changeOpenModal,
            closeModal: this.closeModal,
            removeCart: this.removeCart,
            increasCartItem: this.increasCartItem,
            descreasCartItem: this.descreasCartItem,
            onChangeCount: this.onChangeCount,
            clearCart: this.clearCart,
            } }>
                {this.props.children}
            </MystoreContext.Provider>
        )
    }
}
