import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

//importando los componentes

import Logo from './components/Logo'
import ModalLogin from './components/ModalLogin';
import Header from './components/Header/Header';



function App() {
  return (

      <BrowserRouter>
        <div>

        <Switch>
          <Route path="/" exact>
          <Logo/>
          <ModalLogin/>

          </Route>

        </Switch>
        <Switch>
          <Route path="/mesero" >
        <Header/>

          </Route>

        </Switch>
        </div>
      </BrowserRouter>
    );
}
export default App;
