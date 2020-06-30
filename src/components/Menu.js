import React, { Component } from 'react';
import Product from './Product';
import Contador from './Contador';
import DataMenu from '../DataMenu.json';
class Menu extends Component {
    state = {

    }
    render(){
        let menu = null;

        console.table(Object.entries(DataMenu[0]));


        return (
            <div>
<Contador/>
                <li>
                {menu}
              </li>
            </div>
        );
    }
}

export default Menu;
