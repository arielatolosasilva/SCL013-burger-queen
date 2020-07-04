import React, { Component } from 'react';
import Product from './Product';
import Contador from './Contador';
import DataMenu from '../DataMenu.json';
import Order from './Order/Order';
import { Route, Redirect } from 'react-router-dom';
import { Table } from 'reactstrap';
class Menu extends Component {
    state = {
    }
    render(){
      let menuBreakfast = null;
      let menuLunchDinner = null;
      if (window.location.href === "http://localhost:3000/mesero/menu-desayuno"){
        let menuArray = Object.entries(DataMenu[0])[0][1].products;
        menuBreakfast = menuArray.map(product => {
            return (
              <React.Fragment key={product.id}>
                  <Product name={product.nombre} price={product.valor} qty="2"/>
                   {/*  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{product.valor}</span> */}
              </React.Fragment>
            )
        })
      } 
        return (
          <React.Fragment>
          
            <Table borderless>
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Valor</th>
                      <th>Cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menuBreakfast}
                  </tbody>
          </Table>
          </React.Fragment>
        );
    }  
}
export default Menu;