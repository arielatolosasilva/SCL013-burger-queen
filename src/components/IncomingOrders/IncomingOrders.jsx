import style from './IncomingOrders.module.css'
import CardsIncomingOrders from '../CardsOrders/CardsIncomingOrders'
import firebase from 'firebase'
import React, { useEffect } from 'react';

function IncomingOrders(props) {
  const [resumenOrden,setResumenOrden]= React.useState('')

  React.useEffect(() => {

    const obtenerOrden =  () => {
        const db = firebase.firestore()
            const data = db.collection('resumen orden').onSnapshot((querySnapshot) =>{
              const arr =[]
              querySnapshot.forEach((doc) => {
              firebase.firestore.FieldValue.serverTimestamp()
                arr.push({ data: doc.data().information, id: doc.id, state:doc.data().state, date:doc.data().timestamp });




              });
              setResumenOrden({
                ordenes: [...resumenOrden, ...arr]
              })

            })



    }
    obtenerOrden()


}, [])

  

  return (
    <div>
      <CardsIncomingOrders />
    </div>
  );
}

export default IncomingOrders;
