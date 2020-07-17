import React from 'react';
import {
  Card, CardBody,
  CardTitle,
  Button
} from 'reactstrap';
import style from '../../components/CardsOrders/CardsIncomingOrder.module.css'
import olasCard from '../../assets/images/olitascard.png'
import Contador from '../Contador/Contador';
import firebase from 'firebase';

 const CardsIncomingOrders = (props) => {

   const sendToFirebase = (id, minutes, seconds) => {
     console.log(id, minutes, seconds);
     firebase.firestore().collection('resumen orden').doc(`${id}`).update({
       state: 'Lista para entrega',
       readyTime: firebase.firestore.FieldValue.serverTimestamp(),
       delay: [minutes, seconds]

     }).then(() => { console.log('Enviado a Firebase como "Listo para entregar"') })
   }

    let orders = null;
    const formattingDate = (date) => {
      const formattedDate = date.toDate().toString();
      const splitDate = formattedDate.split(" ");
      return `${splitDate[4]}`;
    };
    if (props.data.orders[0].products !== undefined) {
      orders = props.data.orders.map(order => {
        let products = order.products;
        let orderId = order.id;
        let names = products.map(product => {
          return (
          <React.Fragment
              key={Math.floor(Math.random() * 1000)}><li>{product.name}</li></React.Fragment>
          )
        })

        return (
          <React.Fragment key={Math.floor(Math.random() * 1000)}>
            <Card id={orderId}
              style={({ width: "15rem" }, { marginBottom: "4rem" })}
              className={style.motherCards}>
              <CardBody className={style.cardBody}>
                <CardTitle>
                  <p className={style.nTable}>Mesa nro. {order.table}</p>
                </CardTitle>
                <p>Hora: {formattingDate(order.date)}</p><br></br>
                <>{order.state}</>
                <ul>{names}</ul>
              </CardBody>





              <div>
                    <Contador/>
                    <img src={olasCard} className={style.olasCards} alt='olas'/>
                    </div>
             </Card>

                <Contador send={sendToFirebase} id={orderId} />
                <img src={olasCard} className={style.olasCards} alt="olas" />
          </React.Fragment>
        );
      })
    }

    return (
      <React.Fragment>
        <h1 className={style.chef}>Chef</h1>
        <h2 className={style.incomingOrders}> Pedidos entrantes</h2>

      <div className={style.fatherCards}>

          {orders}

      </div>
      </React.Fragment>
    );

}

export default CardsIncomingOrders;
