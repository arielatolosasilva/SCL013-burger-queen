import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ModalBody, Modal, Table } from "reactstrap";
import style from '../ModalLogin/ModalLogin.module.css';
import firebase from 'firebase/app'
import styledos from './OrderModal.module.css';


function OrderModal(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  //props.order === this.state
  //console.log(props.order.products);
  // props.order.products.map(product => console.log(product));
  let order = null;
  if (props.order.products !== undefined) {
      order = props.order.products.map(product => {
      return (
          <tr key={Math.floor(Math.random() * 1000)} id={style.form}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
          </tr>
      )
    });
  }

  const sendKitchen = () => {
  firebase.firestore().collection('resumen orden').add({
    information: props.order.products,
    table: props.order.table,
    /* id: props.order.orderId, */
    state:'Pendiente',
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),

  }).then(()=>{console.log('enviado')})
    }



    return (
        <div className={styledos.buttomContainer}>
        {props.type === 'breakfast' ? <Button className={style.entrarCocina} onClick={toggle}>
          Ver resumen
        </Button> : <Button className={style.entrarCocinaAlmuerzo} onClick={toggle}>
            Ver resumen
        </Button>}
        <Modal  className={style.modal} contentClassName={style.modalContent} isOpen={modal} toggle={toggle}>
          <ModalBody className={style.modal} >
              <Table borderless>
                <tbody>{ order }</tbody>
              </Table>
              <p>${props.order.total}</p>
              <Button onClick={sendKitchen} color="danger">Enviar a cocina</Button>{" "}
          </ModalBody>

        </Modal>
    </div>
  );
}

export default OrderModal;