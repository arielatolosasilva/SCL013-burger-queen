import React, { useState } from 'react';
import { Button, ModalBody, Modal, Table } from "reactstrap";
import ok from '../../assets/images/ok.png'


function OrdersOk(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div>
       <div >
       <img
                src={ok}

                alt="ok"
                onClick={toggle}
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
