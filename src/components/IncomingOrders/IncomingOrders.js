
import style from './IncomingOrders.module.css'
import CardsIncomingOrders from '../CardsOrders/CardsIncomingOrders'
import firebase from 'firebase'
import React, { Component } from 'react'



const IncomingOrders = () => {
  React.useEffect(()=>{
    const obtenerPedido = async () => {
      const db = firebase.firestore()
      try {
        
      const data = await db.collection('resumen orden').get()
      console.log(data.docs)
      } catch(error){
        console.log(error)
      }
    }
    obtenerPedido()
  }, [])
  
  return (
    <div>
      
    </div>
  )
}

export default IncomingOrders


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