import React, { Component } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink,
} from 'reactstrap';

 const CardsIncomingOrders = (props) => {
   console.log(props.data.orders[0].products)

   const orders = props.data.orders.map(order => {
     let products = order.products;
     return (
       <React.Fragment>
         <Card style={{ width: '25rem' }}>
           <CardBody>
             <CardTitle>Mesa nro. {order.table}</CardTitle>
             <CardText>
               <p>{order.state}</p>
             </CardText>
           </CardBody>
         </Card>
       </React.Fragment>
     )
   })
    return (
      <div>
        <h1>Chef</h1>
        <h2> Pedidos entrantes</h2>
          {orders}
        
      </div>
    );

}

export default CardsIncomingOrders;
