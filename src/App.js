import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

//importamos componentes
import Logo from './components/Logo.js';
import  ModalLogin from './components/ModalLogin';





function App() {
  return (

    <Router>
    <div className="App">
    <Switch>
        <Route path='/'exact>

        <Logo/>
        <button><Link to="/login">Mesero</Link></button>
        <button><Link to="/login">Chef</Link></button>
        </Route>

        <Route path='/login'>
          <ModalLogin/>

</Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
