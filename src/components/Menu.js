import React, { Component } from 'react';
import Product from './Product';
import Contador from './Contador';
import DataMenu from '../DataMenu.json';
import Order from './Order/Order';
import { Route, Redirect } from 'react-router-dom';
class Menu extends Component {
    state = {

    }
    render(){
        let menu = null;
        let breakfastMenu = Object.entries(DataMenu[0])[0][1].products;
        console.log(typeof(breakfastMenu));
        menu = breakfastMenu.map(product => {
            return (
                <React.Fragment key={product.id}>
                <li>
                    {product.nombre}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{product.valor}</span>
            </li>
            </React.Fragment>
            )
        })
        return (
            <div>
                <ul>   
                {menu}
                </ul>
         <Order name="Charlie" product="Gyozas" total="Caleta de plata"/>
       
            </div>
        );
    }
}

export default Menu;
