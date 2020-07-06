
import React from 'react';

import {  Label, Input } from 'reactstrap';
import NumericInput from 'react-numeric-input';
import style from './Products.module.css'
import CounterOne from '../Counters/CounterOne'



function Product(props) {



    return (

        <tr id={props.idd}>
        <td>{props.name}</td>
        <td>{props.price}</td>
        <td>{props.qty}</td>
        <td>
            <Label check>
              <Input type="checkbox" name="agree" trueValue="User Agreed" required />
            </Label>

         </td>
         <td> <NumericInput min={0}
         max={100} value={1}/></td>
         <td> <div id="react-container"></div></td>
         <td> <CounterOne/>     </td>


      </tr>

    );
}

export default Product;
