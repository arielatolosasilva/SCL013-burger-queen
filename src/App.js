import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//importando los componentes
import Logo from './components/Logo'
import ModalLogin from './components/ModalLogin';
import firebase from 'firebase';
import Menu from './components/Menu';


function App() {
  return (
      <BrowserRouter>
        <div>
        <Switch>
          <Route path="/" exact>
          {firebase.auth().currentUser !== null ? <Redirect to="/mesero" />:null}
          <Logo/>
          <ModalLogin/>
          
          </Route>
          <Route path="/mesero" exact>
            <p>hola</p>
          </Route>
          <Route path="/mesero/menu-desayuno" exact>
            <Menu/>
          </Route>
          <Route path="/mesero/menu-almuerzo-cena" exact>
            <p>no lo pienses más</p>
          </Route>
          <Route path="/chef" exact>
            <p>atrevete a aceptarlo</p>
          </Route>
        </Switch>
        </div>
      </BrowserRouter>
    );
}
export default App;