import React, { Component } from 'react';
import Product from './Product';
import DataMenu from '../DataMenu.json';
import Order from './Order/Order';
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
class Menu extends Component {
    state = {
      currency: '$',
    }

    orderProducts = [];

    newOrder = (event) => {
      let product = event.target.parentElement.parentElement; //tr
      let productName = product.childNodes[0].innerHTML; // <td name>
      let productPrice = product.childNodes[1].innerHTML; // <td price>
      let productQty = product.childNodes[2].innerHTML;// <td qty>

      let productInfo = {
        name: productName,
        price: productPrice,
        qty: productQty
      }

      if (event.target.checked === true) {
        console.log(productInfo.name, '---> producto ingresado al pedido');
        this.orderProducts.push(productInfo);
        this.setState({
          products: this.orderProducts,
          table: 5,//hay que crear input o select de mesa/table
          customerName: 'Pepegrillo Sánchez', //hay que crear input de cliente/customer
          total: 5000, //hay que crear otro método para calcular el total
        })
      } else if (event.target.checked === false) {
        console.log(productInfo.name, ' ---> producto eliminado del pedido');
        let productIndex = this.orderProducts.findIndex(object => object.name === productInfo.name);
        this.orderProducts.splice(productIndex, 1);
        this.setState({
          products: this.orderProducts,
          table: 5,
          customerName: 'Pepegrillo Sánchez',
          total: 5000,
        })
      }      
    }

    // solo para comprobar que se vaya actualizando el estado correctamente
    componentDidUpdate() {
      console.log(this.state);
    }

    // no se está utilizando aún, tiene que estar conectada con botón Enviar a cocina
    sendOrder = () => {
      firebase.firestore().collection('orders').add({
        customer: this.state.customerName,
        table: this.state.table,
        products: this.state.products,
        total: this.state.total,
        currency: this.state.currency
      }).then(() => {
        console.log('pedido enviado a cocina')
      })
    }


    render(){
      //no se está utilizando aún
      const orderDetailsHandler = () => {
        console.log(this.state);
      }
      // Uno u otro menú se guarda aquí dependiendo del resultado del if/else if
      let currentMenu = null;
      // Condicional según la propiedad type pasada en App.js al comp. Menu
      if (this.props.type === 'breakfast') {
        let menuArray = Object.entries(DataMenu[0])[0][1].products;
        currentMenu = menuArray.map(product => {
            return (
              <React.Fragment key={product.id}>
                  <Product id={product.id} name={product.nombre} price={product.valor} qty="2" clicked={(event) => this.newOrder(event)}/>
              </React.Fragment>
            )
        })
      } else if (this.props.type === 'lunch-dinner') {
        //Esto es solo de prueba, hay que cambiarlo por el mapeo del menú almuerzo/cena
        currentMenu = (
              <React.Fragment key="alm5">
                  <Product name="almuercito 1" price="$1000" qty="2" />
              </React.Fragment>
        );
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
                    {currentMenu}
                  </tbody>
          </Table>
            {/* para que el botón solo se muestre si se seleccionó al menos 1 prod. */}
            {this.state.products && this.state.products.length > 0 ? <Button><Link to="/mesero/menu-desayuno/resumen-pedido" onClick={() => orderDetailsHandler()}>Ver resumen del pedido</Link></Button> : null
            
            } 
               
            
          </React.Fragment>
        );
    }  
}
export default Menu;