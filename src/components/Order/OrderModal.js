import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  ModalBody,
  Modal,
  Form,
  FormGroup,
  Table
} from "reactstrap";
import style from '../ModalLogin/ModalLogin.module.css';

function OrderModal(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  console.log(props.order.products);
  // props.order.products.map(product => console.log(product));
  let order = null;
  if (props.order.products !== undefined) {
      order = props.order.products.map(product => {
      return (
          <tr key={Math.floor(Math.random() * 1000)} id={style.form}>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{product.quantity}</td>
          </tr>
      )
    });
  }
  

    return (
        <React.Fragment>
        <Button className={style.entrar} onClick={toggle}>
          Ver resumen
        </Button>
        <Modal  className={style.modal} contentClassName={style.modalContent} isOpen={modal} toggle={toggle}>
          <ModalBody className={style.modal} >
              <Table borderless>
                <tbody>{ order }</tbody>
              </Table>
              <p>${props.order.total}</p>
              <Button color="danger">Enviar a cocina</Button>{" "}
          </ModalBody>

        </Modal>
    </React.Fragment>
  );
}

export default OrderModal;