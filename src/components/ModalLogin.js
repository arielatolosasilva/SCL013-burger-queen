import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  ModalHeader,
  ModalBody,
  Modal,
  ModalFooter,
 Form,
 Label,
 FormGroup,
  Input
} from 'reactstrap';


const ModalLogin = (props) => {
  const {
    /*buttonLabel,*/
    className
  } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (

      <div>
        <Button color="danger" onClick={toggle}>Entrar</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Correo Electronico" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Contraseña" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Chef</option>
          <option>Mesero</option>

        </Input>
      </FormGroup>
      <Button color="primary" >Entrar</Button>{' '}
      </Form>

        </ModalBody>
        <ModalFooter>

        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalLogin;
