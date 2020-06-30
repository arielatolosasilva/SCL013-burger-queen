import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//importando los componentes
import Logo from './components/Logo'
import ModalLogin from './components/ModalLogin';
import firebase from 'firebase';
import Menu from './components/Menu';


class App extends Component {
  state = {
    auth: false,
  }


  firebaseAuth = firebase.auth().onAuthStateChanged(() => {
    if (firebase.auth().currentUser !== null) {
      let role = firebase.auth().currentUser.email.split('');
      role = role[0];
      let loginRole; // role: true (waitress) / false (chef)
      role === 'm' ? loginRole = 'mesero' : loginRole = 'chef';
      this.setState({
        auth: true,
        role: loginRole
      })
    }
  })
  
  render() {
    

    return (
      <BrowserRouter>
        <div>
        <Switch>
          <Route path='/' exact>
          {this.state.auth && this.state.role === 'mesero' ? <Redirect from='/' to='/mesero/menu-desayuno' /> : null}
          <Logo/>
          <ModalLogin/>
          
          </Route>
          <Route path="/mesero" exact>
            <p>hola</p>
          </Route>
          <Route path="/mesero/menu-desayuno" exact component={Menu}>
            {/* <Menu/> */}
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
  
  }
    
export default App;