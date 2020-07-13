import style from './IncomingOrders.module.css'
import CardsIncomingOrders from '../CardsOrders/CardsIncomingOrders'
import firebase from 'firebase'
import React, { Component, useState, useEffect } from 'react'



function IncomingOrders(props) {
  const [incomingState, setIncomingState] = useState('hola');

  useEffect(() => {
    setIncomingState({
      incomingState,
      products: 'bla',
    })
  }, [])
  
  console.log(incomingState);
  return (
    <div>

    </div>
  );
}

export default IncomingOrders;

/*class IncomingOrders extends Component {
  constructor() {
    super();
    this.state = {
    menuToChef:[]
   }
  /*const showOrderChef = () => {
    firebase.firestore.Collection('orden resumen').onSnapShot().then((querySnapshot) => { 
      const chef = querySnapshot.docs.map(doc => doc.data());
      this.setState({
        menuToChef: chef 
      })
    })
  }
  render() 
    return (
      <div>
        <div className={style.fatherCards}>
          {showOrderChef}
    
    <CardsIncomingOrders/>
    
        </div>
      </div>
    )
  }
}

export default IncomingOrders*/