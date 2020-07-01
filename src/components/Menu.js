import React, { Component } from 'react';
import Product from './Product';
import Contador from './Contador';
import DataMenu from '../DataMenu.json';
class Menu extends Component {
    state = {

    }
    render(){
        let menu = null;
        let breakfastMenu = Object.entries(DataMenu[0])[0][1].products;
        
        console.log(breakfastMenu);



        return (
            <div>
<Contador/>
                <li>
                {/* {menu} */}
              </li>
            </div>
        );
    }
}

export default Menu;
