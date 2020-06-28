/* import Menu from './components/Menu/Menu';
import ChefLayout from './components/ChefLayout/ChefLayout';
import WaitressLayout from './components/WaitressLayout/WaitressLayout'; */
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap / dist / css / bootstrap.min.css';
import ModalLogin from './components/ModalLogin/ModalLogin';
import {
  Button,
  ModalHeader,
  ModalBody,
  Modal,
  ModalFooter,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from 'reactstrap';
const App = (props) => {
  /* state = {
    currency: '$',
    products: [
      {id: 'bk1', name: 'Café americano', price: 1000},
      {id: 'bk2', name: 'Café con leche', price: 2000},
      {id: 'bk3', name: 'Té matcha', price: 3000}
    ]
  } */

  
    const {
      buttonLabel,
      className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    

    return (
      <BrowserRouter>
        <div>
        <Button color="danger" onClick={toggle}>Entrar</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
         <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>@</InputGroupText>
          </InputGroupAddon>
          <Input placeholder="username" />
         </InputGroup>

         <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>#</InputGroupText>
          </InputGroupAddon>
          <Input placeholder="contraseña" />
         </InputGroup>

         <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Rol</InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Mesero/Chef" />
         </InputGroup>
         
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Entrar</Button>{' '}
        </ModalFooter>
      </Modal>
        <Switch>
          <Route path="/login">
            <ModalLogin />
            {/* <WaitressLayout />
            <Menu products={this.state.products} currency={this.state.currency}/> */}
          </Route>
          {/* <Route path="/login">
            <ChefLayout />
          </Route> */}
        </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;