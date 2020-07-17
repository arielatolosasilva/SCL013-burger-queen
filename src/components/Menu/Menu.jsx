import React, { Component } from "react";
import Product from "../Products/Product.jsx";
import DataMenu from "../../DataMenu.json";
import { Table } from "reactstrap";
import style from "./Menu.module.css";
import OrderModal from "../Order/OrderModal.jsx";
import tea from '../../assets/images/tea.png';
import rice from '../../assets/images/rice.png';
import sake from '../../assets/images/sake.png';
import ramenuno from '../../assets/images/ramenuno.png';
import ramendos from '../../assets/images/ramendos.png';
import ramentres from '../../assets/images/ramentres.png';
import tortilla from '../../assets/images/tortilla.png';


class Menu extends Component {
  state = {

  };


  arrayProducts = [

  ]

sumTotal = (array) => {
  let suma = 0
  array.forEach(element => {
    let multiplication = element.quantity * element.price
    suma += multiplication

  });
  return suma
}

resume = (e) => {
  let quantityProducts = e.target.value
  let quantityFather = e.target.parentElement.parentElement
  let quantityFatherChildren = quantityFather.childNodes
  let productsName = quantityFatherChildren[0].innerText
  let productPrice = quantityFatherChildren[1].outerText


 let productsResume = {
   name: productsName,
   price: productPrice,
   quantity: quantityProducts,
 }

 if(quantityProducts > 0){
  this.arrayProducts.push(productsResume)
  /*console.log(this.arrayProducts)*/
 } else {
  let productIndex = this.arrayProducts.findIndex(product => product.name === productsResume.name)
  this.arrayProducts.splice(productIndex, 1)
  /*console.log(this.arrayProducts)*/
 }

 this.setState(
   {
    orderId: Math.floor(Math.random() * 8000),
    products: this.arrayProducts,
    total: this.sumTotal(this.arrayProducts),


   }
   )
}

table = (e) => {
  let tableNumber = e.target.value
  this.setState({
    table: tableNumber
  })
}


componentDidUpdate(){
  console.log(this.state)
}

  render() {
    // Uno u otro menú se guarda aquí dependiendo del resultado del if/else if
    let currentMenu = null;
    let mainCourse = null;
    let sideDish = null;
    let drinks = null;
    let extras = null;
    let mainCourseTitle = null;
    let sideDishTitle = null;
    let drinksTitle = null;
    let extrasTitle = null;



    // Condicional según la propiedad type pasada en App.js al comp. Menu
    if (this.props.type === "breakfast") {
      let menuArray = Object.entries(DataMenu[0])[0][1].products;
      currentMenu = menuArray.map((product) => {
        return (
          <React.Fragment key={product.id}>
            <Product id={product.id} name={product.nombre} price={product.valor} change={(e)=>this.resume(e)}/>
          </React.Fragment>
        );
      });
    } else if (this.props.type === "lunch-dinner") {
      let menuArraySideDish = Object.entries(DataMenu[0])[1][1].Acompañamiento;
      /*console.log(menuArraySideDish)*/
      let menuArrayMainCourse = Object.entries(DataMenu[0])[1][1].PlatoFondo;
      /*console.log(menuArrayMainCourse)*/
      let menuArrayDrinks = Object.entries(DataMenu[0])[1][1].bebestibles;
      /*console.log(menuArrayDrinks)*/
      let menuArrayExtras = Object.entries(DataMenu[0])[1][1].extras;
      /*console.log(menuArrayExtras)*/


      //Esto es solo de prueba, hay que cambiarlo por el mapeo del menú almuerzo/cena
      mainCourse = menuArrayMainCourse.map((product) => {
        if (menuArrayMainCourse.length > 0) {
          mainCourseTitle = 'PLATO DE FONDO'
        }
        return (
          <React.Fragment key={product.id}>
            <Product id={product.id} name={product.nombre} price={product.valor} change={(e)=>this.resume(e)}/>
          </React.Fragment>
        );
      })

    sideDish =menuArraySideDish.map((product) => {
      if (menuArraySideDish.length > 0) {
        sideDishTitle = 'ACOMPAÑAMIENTOS'
      }
      return (
        <React.Fragment key={product.id}>
          <Product id={product.id} name={product.nombre} price={product.valor} change={(e)=>this.resume(e)}/>
        </React.Fragment>
      );
    })
    drinks = menuArrayDrinks.map((product) => {
      if (menuArrayDrinks.length > 0) {
        drinksTitle = 'BEBESTIBLES'
      }
      return (
        <React.Fragment key={product.id}>
          <Product id={product.id} name={product.nombre} price={product.valor} change={(e)=>this.resume(e)}/>
        </React.Fragment>
      );
    })
    extras=menuArrayExtras.map((product) => {
      if (menuArrayExtras.length > 0) {
        extrasTitle = 'EXTRAS'
      }
      return (
        <React.Fragment key={product.id}>
          <Product id={product.id} name={product.nombre} price={product.valor} change={(e)=>this.resume(e)}/>
        </React.Fragment>
      );
    })
   }
   // RETURN PRINCIPAL DEL COMPONENTE MENÚ
    return (
      <React.Fragment>
        <section className={style.mainContainer}>
          <h2 className={style.menuDesayuno}> Menú Desayuno</h2>
          <span className={style.table}> N° Mesa </span>
          <select onChange={(e)=>this.table(e)} min={0} max={10} >
             <option value='0'>0 </option>
             <option value='1'>1 </option>
             <option value='2'>2 </option>
             <option value='3'>3 </option>
             <option value='4'>4 </option>
             <option value='5'>5 </option>
             <option value='6'>6 </option>
             <option value='7'>7 </option>
             <option value='8'>8 </option>
             <option value='9'>9 </option>
             <option value='10'>10 </option>
             </select>
            <Table borderless className={style.menu} >

              <tbody className={style.container}>
                {/* se vuelve a evaluar para mostrar solo 1 menú por vista*/}
                {this.props.type === 'breakfast' ? currentMenu : null}
    
                  <tr><td>{mainCourseTitle}</td></tr>
                    {mainCourse}
                  <tr><td>{sideDishTitle}</td></tr>
                    {sideDish}
                  <tr><td>{drinksTitle}</td></tr>
                    {drinks}
                  <tr><td>{extrasTitle}</td></tr>
                    {extras}

              </tbody>

            </Table>
        
            <img className={style.sake}
            src={this.props.type === "breakfast" ? tea : sake}
            className={this.props.type === "breakfast" ? style.tea : style.sake}
            alt="taza de té matcha"></img>
          <img className={style.ramenuno}
            src={this.props.type === "breakfast" ? rice : ramenuno}
            className={this.props.type === "breakfast" ? style.rice : style.ramenuno}
            alt="onigiri (bolas de arroz)"></img>
          <img className={style.ramendos}
            src={this.props.type === "breakfast" ? rice : ramentres}
            className={this.props.type === "breakfast" ? style.rice : style.ramentres}

            alt="onigiri (bolas de arroz)"></img>
            <img className={style.tortilla}
            src={this.props.type === "breakfast" ? rice : tortilla}
            className={this.props.type === "breakfast" ? style.rice : style.tortilla}

            alt="onigiri (bolas de arroz)"></img>
        </section>

        <OrderModal order={this.state} />
      </React.Fragment>
    );
  }
}
export default Menu;
