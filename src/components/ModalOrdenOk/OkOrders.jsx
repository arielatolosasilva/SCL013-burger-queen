import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ok from '../../assets/images/ok.png';
import firebase from 'firebase';
import style from './OkOrders.module.css';
import cerrar from '../../assets/images/cerrarsesion.png';
import olitas from '../../assets/images/olitas.png'
import { Link } from "react-router-dom";

class OkOrders extends Component {


   state = {
      modal: false,
      info:[]
    };

    toggle = this.toggle.bind(this);


  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  arr = [];

componentDidMount(){
  const db = firebase.firestore();
    db.collection("resumen orden").where('state', '==', 'Listo para entrega').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.arr.push({
          date: this.formattingDate(doc.data().timestamp),
          table: doc.data().table,
        });
        console.log(doc)
      });
      this.setState({
        info: this.arr,
      });

    });

}

delivery =()=>{
  this.toggle()

}
  formattingDate =(date) => {
  const formattedDate = date.toDate().toString();
  const splitDate = formattedDate.split(" ");
  return `${splitDate[4]}`;
};

orderCheck= '';
componentDidUpdate() {
  this.orderCheck= this.state.info.map ( order => {
    let dates = order.date;
    let tables = order.table;
      return(
      <React.Fragment> <li> N° mesa :  {tables}</li><span> Hora termino preparacion {dates}</span>

  </React.Fragment>
            )

  }
    )
  console.log(this.orderCheck);
  console.log('trajo los pedidos')
}

signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      this.setState({
        auth: false,
        role: null,
      });

      console.log(
        "Sesión cerrada correctamente",
        this.state.auth,
        this.state.role
      );
      alert(
        "Sesión cerrada"
      );
    });

  }


  render() {
    return (
      <div>
        <img
                src={ok}
                className={style.ok}

                alt="ok"
                onClick={()=> this.delivery()}
              ></img>
              <Link to="/">
              <img src={cerrar} className={style.cerrar} onClick={() => this.signOut()} alt="cerrar"></img>
              </Link>
        <Modal contentClassName={style.modalContent} isOpen={this.state.modal} toggle={this.toggle}  >
          <ModalHeader  toggle={this.toggle}>Pedidos listo para entrega</ModalHeader>
          <ModalBody >

    <ul>{this.orderCheck}</ul>
    <img src={olitas}className={style.olitas} ></img>

          </ModalBody>

        </Modal>
      </div>
    );
  }
}

export default OkOrders;
