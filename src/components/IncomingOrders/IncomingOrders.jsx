import React, { Component } from 'react';
import CardsIncomingOrders from '../CardsOrders/CardsIncomingOrders.jsx';
import firebase from 'firebase'
import style from '../../components/IncomingOrders/IncomingOrders.module.css'
class IncomingOrders extends Component {
  state = {
    orders: [{}]
  }

  arr = [];

  componentDidMount() {
    const db = firebase.firestore()
    db.collection('resumen orden').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.arr.push({
          products: doc.data().information,
          id: doc.id,
          state: doc.data().state,
          date: doc.data().timestamp,
          table: doc.data().table
        });

      });
      this.setState({
        orders: this.arr
      })
   })
  }


  componentDidUpdate() {
    /* console.log(this.state.orders[0]);
    console.log('ESTADO ACTUALIZADO!') */

  }


  render() {
    return (
      <div className={style.container}>
        <CardsIncomingOrders data={this.state} />
        {/* {console.log(this.state.orders[0].id)} */}
      </div>
    );
  }
}

export default IncomingOrders;
















              firebase.firestore.FieldValue.serverTimestamp()















/* import style from './IncomingOrders.module.css'
import CardsIncomingOrders from '../CardsOrders/CardsIncomingOrders'
import firebase from 'firebase'
import React, { useEffect, useState } from 'react';

function IncomingOrders(props) {
  const [ resumenOrden, setResumenOrden ] = useState('')

  useEffect(() => {
        const db = firebase.firestore()
            db.collection('resumen orden').onSnapshot((querySnapshot) =>{
              const arr =[]
              querySnapshot.forEach((doc) => {
              firebase.firestore.FieldValue.serverTimestamp()
                arr.push({
                  information: doc.data().information,
                  id: doc.id,
                  state: doc.data().state,
                  date:doc.data().timestamp
                });

              });
              setResumenOrden(previousOrder => ([
                  ...previousOrder,
                  ...arr
                ])
              )

            })
}, [])

  useEffect(() => {

    console.log(resumenOrden[1].id)
    setTimeout(() => {
      console.log(resumenOrden[1].id)

    }, 3000)


  }, [resumenOrden])

  return (
    <div>
      holaaaaa



<ul>

    </li>



    )}
  </ul>
    </div>
  );
}

export default IncomingOrders; */

