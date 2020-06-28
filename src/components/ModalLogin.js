import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  ModalHeader,
  ModalBody,
  Modal,
  ModalFooter,
  Input,
  FormGroup,
  Label,
  Form
} from 'reactstrap';

const ModalLogin = (props) => {
  const {
    buttonLabel,
    className,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  const submitInput = (event) => {
    event.preventDefault();
    let form = event.target;
    let userName = form.password.value;
    let email = form.email.value;
    let role = form.select.value;
    console.log(userName, email, role);
  }
  return (
    <div>
      <Button color="danger" onClick={toggle}>Entrar</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form onSubmit={(event) => submitInput(event)}>
            <FormGroup>
            <Label for="exampleEmail">Correo</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Correo" />
            </FormGroup>
            <FormGroup>
            <Label for="examplePassword">Contraseña</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Contraseña" />
            </FormGroup>
            <FormGroup>
            <Label for="exampleSelect">Rol</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Mesero</option>
              <option>Chef</option>
            </Input>
            </FormGroup>
            <Button color="primary">Entrar</Button>{' '}
          </Form>
        </ModalBody>
        <ModalFooter>
          
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalLogin;
