import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from './components/Logo'
import ModalLogin from './components/ModalLogin';
import style from './App.module.css';
class App extends Component {
  sayHi = () => {
    console.log('Hi!');
  }
  componentDidMount() {
    this.sayHi();
  }

  componentWillUnmount() {
    console.log('se va a desmontar');
  }
  render () {
    return (
      
       <BrowserRouter>
        <div>
           <p className={style.hello}>HOLA</p>
        <Switch>
          <Route path="/algo">
              <p>ALGO</p>
            </Route>
          <Route path="/mesero/menu">
            
          </Route>
          <Route path="/">
            <Logo/>
            <ModalLogin />
            
          </Route>

        </Switch>
        </div>
      </BrowserRouter>
     
    );
  }
    
}
export default App;
