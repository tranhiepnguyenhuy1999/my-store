import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavbarCustom from './components/NavbarCustom'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import Details from  './components/Details' 
import Default from './components/Default'
import Mystore from './context/Mystore'
import Modal from './components/Modal'
function App() {

  return (
    <Mystore>
        <Router>
        <NavbarCustom></NavbarCustom>
        <Modal></Modal>
          <Switch>
              <Route exact path="/" component={ProductList}>
              </Route>
              <Route exact path="/detail" component={Details}>
              </Route>
              <Route exact path="/cart" component={Cart}>
              </Route>
              <Route component={Default}>
              </Route>
          </Switch>
      </Router>
    </Mystore>
    
  
  );
}

export default App;
