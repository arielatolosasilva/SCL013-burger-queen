import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

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

import Logo from './components/Logo'
const App = (props) => {

    const {
      /*buttonLabel,*/
      className
    } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
      <BrowserRouter>
        <div>
          <Logo/>
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


          </Route>

        </Switch>
        </div>
      </BrowserRouter>
    );
}
export default App;
