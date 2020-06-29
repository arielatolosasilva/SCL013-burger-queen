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
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import Menu from './Menu';



const ModalLogin = (props) => {
  const {
    /*buttonLabel,*/
    className
  } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const submitInput = (event) => {
    event.preventDefault();
    let form = event.target;
    let password = form.password.value;
    let email = form.email.value;
    console.log(password, email);

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      const user = firebase.auth().currentUser;
      return <Redirect to='/mesero' />
      
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        alert('Contraseña Incorrecta');
      } else if (errorCode === 'auth/user-not-found') {
        alert('Usuario no encontrado');
      } else {
        alert('Problemas para iniciar sesión, verifique sus datos y vuelva a ingresar');
      }
    });
};
  
  return (
      <div>
        <Button color="danger" onClick={toggle}>Entrar</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Form onSubmit={(event) => submitInput(event)}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Correo Electronico" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Contraseña" />
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