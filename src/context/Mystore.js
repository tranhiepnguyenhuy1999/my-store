import React, { Component } from 'react'
import MystoreContext from './MystoreContext'
import {storeProducts, DealProduct} from '../data'

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
            productDeal:[],
        };
      
    }
    componentDidMount(){
     this.setProducts();
     this.setDealProduct();
    }
    setProducts =()=>{
        let tempproducts=[];
        storeProducts.map((item)=>{
                let singelItem ={...item};
                return tempproducts=[...tempproducts, singelItem];
            })
            this.setState(()=>{
                return{products: tempproducts}
            })
    }
    setDealProduct=()=>{
        let tempproducts=[];
        DealProduct.map((item)=>{
            let singelItem ={...item};
            return tempproducts=[...tempproducts, singelItem];
        })
        this.setState(()=>{
            return{productDeal: tempproducts}
        })
    }
    handelIncart =(item) =>{
            console.log(this.state.productDetail)
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
    dealProductDetail= ()=>{
        let deal=[...this.state.productDeal];
        let Products=[...this.state.products]
        let DelPro=Products.find(item=>deal[0].id===item.id)
        this.setState(()=>{return {
            productDetail: DelPro,
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
    changeIncart=(item, value)=>{
            console.log(item)
            let carts=[...this.state.cart]
            console.log(carts)
            let index= carts.indexOf(item)
            console.log(index)
            carts[index].count=value;
            carts[index].total=value*carts[index].price;
            this.setState(()=>{
                return {cart: carts}
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
            removeCart: this.removeCart,
            increasCartItem: this.increasCartItem,
            descreasCartItem: this.descreasCartItem,
            clearCart: this.clearCart,
            dealProductDetail : this.dealProductDetail,
            changeIncart: this.changeIncart,
            } }>
                {this.props.children}
            </MystoreContext.Provider>
        )
    }
}
