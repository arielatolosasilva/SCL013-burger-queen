
import style from './IncomingOrders.module.css'
import CardsIncomingOrders from '../CardsOrders/CardsIncomingOrders'
import firebase from 'firebase'
import React from 'react';

function IncomingOrders(props) {
  const [resumenOrden,setresumenOrden]= React.useState('')

  React.useEffect(() => {

    const obtenerOrden =  () => {
        const db = firebase.firestore()
            const data = db.collection('resumen orden').onSnapshot((querySnapshot) =>{
              const arr =[]
              querySnapshot.forEach((doc) => {
              firebase.firestore.FieldValue.serverTimestamp()
                arr.push({ data: doc.data().information, id: doc.id, state:doc.data().state, date:doc.data().timestamp });




              });
              setresumenOrden([...resumenOrden,arr])

            })



    }
    obtenerOrden()


}, [])

React.useEffect(()=>{
/*resumenOrden.state*/
console.log(resumenOrden);
//console.log(Object.entries(resumenOrden[0]))
console.log(Array.isArray(resumenOrden[0]))
console.log(resumenOrden[0][3])


})

  return (
    <div>
      <p>Hola</p>




{/*<ul>

  { resumenOrden.map(item=> (
    <li key={item.id}>
{item.name}
{console.log(item.name)}
{item.quantity}
    </li>


  )

    )}
  </ul>*/}
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
