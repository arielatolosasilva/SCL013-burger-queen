import React, { Component } from 'react';
import Product from './Product';
import Contador from './Contador';
import DataMenu from '../DataMenu.json';
import Order from './Order/Order';
import { Route, Redirect } from 'react-router-dom';
class Menu extends Component {
    state = {
      currency: '$',
      products: [
        {id: 'cl', name: 'Café con leche', price: '2000'},
        {id: 'gz', name: 'Gyozas', price: '3500'}
        ],
      total: '5500'
    }

    render(){
        let menu = null;
        let breakfastMenu = Object.entries(DataMenu[0])[0][1].products;
        console.log(typeof(breakfastMenu)); //array of objects
        menu = breakfastMenu.map(product => {
            return (
              <React.Fragment key={product.id}>
                <li>
                  <Order name={product.nombre} price={product.valor}/>
                   {/*  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{product.valor}</span> */}
                </li>
              </React.Fragment>
            )
        })
       /*  let order = null;
        order = this.state.products.map((product) => {
          return (
          <React.Fragment key={product.id}>
            <Order name={product.name} price={product.price} />
          </React.Fragment>
          )
        }) */
        return (
            <div>
                <ul>   
                {menu}
                </ul>
         {/* <Order name="Charlie" product="Gyozas" total="Caleta de plata"/> */}

         {/* {order}
         <h1>Total: ${this.state.total}</h1> */}
       
            </div>
        );
    }
}

export default Menu;
