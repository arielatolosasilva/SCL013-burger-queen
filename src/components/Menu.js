import React, { Component } from 'react';
import Product from './Product';
import DataMenu from '../DataMenu.json';
import { Table } from 'reactstrap';
import style from '../components/Menu.module.css';
class Menu extends Component {
    state = {
      products: [{}],
      total: 0,
      currency: '$'
    }
   
    render(){
      // Uno u otro menú se guarda aquí dependiendo del resultado del if/else if
      let currentMenu = null;
      // Condicional según la propiedad type pasada en App.js al comp. Menu
      if (this.props.type === 'breakfast') {
        let menuArray = Object.entries(DataMenu[0])[0][1].products;
        currentMenu = menuArray.map(product => {
            return (
              <React.Fragment key={product.id}>
                  <Product name={product.nombre} price={product.valor} qty="2"/>
              </React.Fragment>
            )
        })
      } else if (this.props.type === 'lunch-dinner') {
        //Esto es solo de prueba, hay que cambiarlo por el mapeo del menú almuerzo/cena
        currentMenu = (
              <React.Fragment key="alm5">
                  <Product name="almuercito 1" price="$1000" qty="2"/>
              </React.Fragment>
        );
      }
        return (
          <React.Fragment>
            <Table borderless className={style.menu}>
            
                  <thead>
                  <h2 className={style.menuDesayuno}>Menu Desayuno</h2>
                    <tr>
                      <th>Producto</th>
                      <th>Valor</th>
                      <th>Cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentMenu}
                  </tbody>
          </Table>
          </React.Fragment>
        );
    }  
}
export default Menu;