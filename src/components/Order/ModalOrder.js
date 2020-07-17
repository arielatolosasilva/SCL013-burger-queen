import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  ModalBody,
  Modal,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import style from '../ModalLogin/ModalLogin.module.css';

function ModalOrder(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
  let orderInfo = null;
  if (props.order.products && props.order.products.length > 0) {
    orderInfo = props.order.products.map(product => {
      console.log(product.id + ' -order');
      return (
        
        <FormGroup key={product.id + ' -order'} id={style.form}>
          <p>{product.name}, </p>
          <p>{product.price}, </p>
          <p>{product.qty}, </p>
          <p>Nro. pedido: {props.order.orderId}</p>
        </FormGroup>
      )
    })
  }

  
  
    return (
        <div className={style.boton}>
      <Button className={style.entrar} onClick={toggle}>
        Ver resumen
      </Button>
      <Modal  className={style.modal} isOpen={modal} toggle={toggle}>
        <ModalBody className={style.modal} >
          <Form>
            {orderInfo}

            <Button color="danger">Entrar</Button>{" "}
          </Form>
        </ModalBody>

      </Modal>
    </div>
    );
}

export default ModalOrder;