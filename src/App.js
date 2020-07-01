import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//importando los componentes
import Logo from './components/Logo'
import ModalLogin from './components/ModalLogin';
import firebase from 'firebase';
import Menu from './components/Menu';
import Header from './components/Header/Header';
import Order from './components/Order/Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
} from 'reactstrap';
import style from './App.module.css';
import IncomingOrders from './components/IncomingOrders/IncomingOrders';




function App() {
  let path = '/';
  let loggedIn = false;
  if (firebase.auth().currentUser !== null) {
    loggedIn = true;
    path = '/mesero';
  } 
  return (
      <BrowserRouter>
        <div>
          {console.log(firebase.auth().currentUser)}
        <Switch>
          <Route path="/" exact>
          {firebase.auth().currentUser !== null ? <Redirect to="/mesero" />:null}
        
          <Logo/>
          <ModalLogin/>
          </Route>

          <Route path="/mesero" exact>
             <Header />
             <div className={style.mainContainer}>
              <div className={style.btnContainer}>
                <h4 className={style.meseroH1}>Mesero</h4>
                <Button className={style.optionBtn}>Menú desayuno</Button>
                <Button className={style.optionBtn}>Menú almuerzo y cena</Button>
              </div>
             </div>
          </Route>
          <Route path="/mesero/menu-desayuno" exact>
            <Header/>
            <Menu />
          </Route>
          <Route path="/mesero/menu-almuerzo-cena" exact>
            <p>no lo pienses más</p>
          </Route>
          <Route path="/chef" exact>
            <Header/>
           <IncomingOrders/>

          </Route>
        </Switch>
        </div>
      </BrowserRouter>
     
    );
  }
    
export default App;