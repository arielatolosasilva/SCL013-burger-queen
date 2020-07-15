import React from 'react';
import {
  Card, CardBody,
  CardTitle
} from 'reactstrap';

 const CardsIncomingOrders = (props) => {
    let orders = null;
    if (props.data.orders[0].products !== undefined) {
      orders = props.data.orders.map(order => {
        console.log(order);
        let products = order.products;
        let names = products.map(product => {
          return (
          <React.Fragment
              key={Math.floor(Math.random() * 1000)}><li>{product.name}</li></React.Fragment>
          )
        })

        return (
          <React.Fragment key={Math.floor(Math.random() * 1000)}>
            <Card style={{ width: '25rem' }}>
              <CardBody>
                <CardTitle><b>Mesa nro. {order.table}</b></CardTitle>
                  <u>{order.state}</u>
                  <ul>
                    {names}
                  </ul>
              </CardBody>
            </Card>
          </React.Fragment>
        )
      })
    }
   
    return (
      <div>
        <h1>Chef</h1>
        <h2> Pedidos entrantes</h2>
          {orders}
        
      </div>
    );

}

export default CardsIncomingOrders;
