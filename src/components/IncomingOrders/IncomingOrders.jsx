
import style from './IncomingOrders.module.css'
import CardsIncomingOrders from '../CardsOrders/CardsIncomingOrders'
import firebase from'firebase'
import React from 'react';

function IncomingOrders (props) {
  const [resumenOrden,setresumenOrden]= React.useState([])

  React.useEffect(() => {

    const obtenerOrden =  () => {
        const db = firebase.firestore()
            const data = db.collection('resumen orden').onSnapshot((querySnapshot) =>{
              const arr =[]
              querySnapshot.forEach((doc) => {

              firebase.firestore.FieldValue.serverTimestamp()

                arr.push({ id: doc.id,...doc.data()});
               console.log(arr)
              });

              setresumenOrden([arr])

            })



    }
    obtenerOrden()


}, [])

/*React.useEffect(()=>{
/*resumenOrden.state*/
/*console.log(resumenOrden);
//console.log(Object.entries(resumenOrden[0]))
console.log(Array.isArray(resumenOrden[0]))



/*})*/

  return (
    <div>
      holaaaaa




<ul>
<li>

    </li>





  </ul>
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
