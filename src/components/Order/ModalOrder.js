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
      return (
        <React.Fragment key={product.orderId}>
        <p>{product.name}, </p>
        <p>{product.price}, </p>
        <p>{product.qty}, </p>
      </React.Fragment>
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
            <FormGroup id={style.form}>
              {orderInfo}

            </FormGroup>
            <FormGroup id={style.form}>
              
            </FormGroup>
            <Button color="danger">Entrar</Button>{" "}
          </Form>
        </ModalBody>

      </Modal>
    </div>
    );
}

export default ModalOrder;