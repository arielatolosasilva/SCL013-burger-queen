import React, { Component } from "react";
import Product from "../Products/Product.jsx";
import DataMenu from "../../DataMenu.json";
import { Table } from "reactstrap";
import style from "./Menu.module.css";
import OrderModal from "../Order/OrderModal";
import tea from '../../assets/images/tea.png';
import rice from '../../assets/images/rice.png';


class Menu extends Component {
  state = {

  };


  arrayProducts=[

  ]

sumTotal =(array) =>{
  let suma = 0
  array.forEach(element => {
    let multiplication = element.quantity * element.price
    suma += multiplication

  });
  return suma
}

resume = (e) =>{
let quantityProducts=e.target.value
let quantityFather= e.target.parentElement.parentElement
let quantityFatherChildren= quantityFather.childNodes
let productsName=quantityFatherChildren[0].innerText
let productPrice=quantityFatherChildren[1].outerText


 let productsResume={
   name:productsName,
   price:productPrice,
   quantity:quantityProducts,
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
    products:this.arrayProducts,
    total:this.sumTotal(this.arrayProducts),


   }
   )
}

table = (e) => {
  let tableNumber = e.target.value
  this.setState({
    table:tableNumber
  })
}


componentDidUpdate(){
  /*console.log(this.state)*/
}

  render() {
    // Uno u otro menú se guarda aquí dependiendo del resultado del if/else if
    let currentMenu = null;
    let mainCourse = null;
    let sideDish = null;
    let drinks= null;
    let extras=null;
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
      mainCourse =menuArrayMainCourse.map((product) => {
        return (
          <React.Fragment key={product.id}>
            <Product id={product.id} name={product.nombre} price={product.valor} change={(e)=>this.resume(e)}/>
          </React.Fragment>
        );
      })

    sideDish =menuArraySideDish.map((product) => {
      return (
        <React.Fragment key={product.id}>
          <Product id={product.id} name={product.nombre} price={product.valor} change={(e)=>this.resume(e)}/>
        </React.Fragment>
      );
    })
    drinks=menuArrayDrinks.map((product) => {
      return (
        <React.Fragment key={product.id}>
          <Product id={product.id} name={product.nombre} price={product.valor} change={(e)=>this.resume(e)}/>
        </React.Fragment>
      );
    })
    extras=menuArrayExtras.map((product) => {
      return (
        <React.Fragment key={product.id}>
          <Product id={product.id} name={product.nombre} price={product.valor} change={(e)=>this.resume(e)}/>
        </React.Fragment>
      );
    })
   }
    return (
      <React.Fragment>
        <section className={style.menu}>
          <div className={style.text}>
          <h2 className={style.menuDesayuno}> Menú Desayuno</h2>
          <div className={style.contenedorTabla}>
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
              <td>Plato de Fondo</td>
                {mainCourse}
                <td>Acompañamiento</td>
                {sideDish}
                <td>Bebestible </td>
                {drinks}
                <td>Extras</td>
                {extras}

              </tbody>

            </Table>
          </div>
          </div>
          <img src={tea} className={style.tea}></img>
          <img src={rice} className={style.rice}></img>
        </section>

        <OrderModal order={this.state} />
      </React.Fragment>
    );
  }
}
export default Menu;
