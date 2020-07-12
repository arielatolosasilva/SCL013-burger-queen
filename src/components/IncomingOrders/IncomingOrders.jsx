import React from 'react';
import style from './IncomingOrders.module.css';
import CardsIncomingOrders from '../CardsOrders/CardsIncomingOrders';

const IncomingOrders = () => (
  (
    <div className={style.fatherCards}>

      <CardsIncomingOrders />

    </div>
  ));
export default IncomingOrders;
