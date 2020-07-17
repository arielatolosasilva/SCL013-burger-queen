import React from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import style from "../../components/CardsOrders/CardsIncomingOrder.module.css";
import olasCard from "../../assets/images/olitascard.png";
import Contador from "../Contador/Contador";

const CardsIncomingOrders = (props) => {
  let orders = null;
  if (props.data.orders[0].products !== undefined) {
    orders = props.data.orders.map((order) => {
      console.log(order);
      let products = order.products;
      let names = products.map((product) => {
        return (
          <React.Fragment key={Math.floor(Math.random() * 1000)}>
            <li>{product.name}</li>
          </React.Fragment>
        );
      });

      return (
        <React.Fragment key={Math.floor(Math.random() * 1000)}>
          <Card
            style={({ width: "15rem" }, { marginBottom: "4rem" })}
            className={style.motherCards}
          >
            <CardBody className={style.cardBody}>
              <CardTitle>
                <p className={style.nTable}>
                  Mesa nro. {order.table} {order.date[0]}
                </p>
              </CardTitle>
              <u>{order.state}</u>
              <ul>{names}</ul>
            </CardBody>

            <div>
              <Contador />
              <img src={olasCard} className={style.olasCards} alt="olas" />
            </div>
          </Card>
        </React.Fragment>
      );
    });
  }

  return (
    <React.Fragment>
      <h1 className={style.chef}>Chef</h1>
      <h2 className={style.incomingOrders}> Pedidos entrantes</h2>

      <div className={style.fatherCards}>{orders}</div>
    </React.Fragment>
  );
};

export default CardsIncomingOrders;
