import React, { useState } from 'react';
import { Button, ModalBody, Modal, Table } from "reactstrap";
import ok from '../../assets/images/ok.png'
import style from './OrdersOk.module.css';
import cerrar from '../../assets/images/cerrarsesion.png';


function OrdersOk(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  let info = null;
  let arr =[];
  const ordersDelivery =()=>{
    console.log('probando')

   toggle()
    const db = firebase.firestore();
    db.collection("resumen orden").where('state', '==', 'Listo para entrega').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        arr.push({
          date: formattingDate(doc.data().timestamp),
          table: doc.data().table,
        });
        info = arr;
      });
      console.log(info)

    });

    const formattingDate = (date) => {
      const formattedDate = date.toDate().toString();
      const splitDate = formattedDate.split(" ");
      return `${splitDate[4]}`;
    };

    let orderCheck= null;
    orderCheck= info.map ( order => {
      let dates = order.date;
      let tables = order.table;
        return(
<React.Fragment> <p>{dates}</p>
                 <p>{tables}</p>

 </React.Fragment>
              )

    }
      )

  }
  return (
    <div>
       <div >
       <img
                src={ok}

                alt="ok"
                onClick={()=> ordersDelivery()}
              ></img>

        <Modal  isOpen={modal} toggle={toggle}>
          <ModalBody  >
              <Table borderless>
  <tbody></tbody>
              </Table>
              <p></p>

          </ModalBody>

        </Modal>
    </div>

    </div>
  );
}

export default OrdersOk;
