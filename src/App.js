import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from './components/Logo'
import ModalLogin from './components/ModalLogin';
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
        <Switch>
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
