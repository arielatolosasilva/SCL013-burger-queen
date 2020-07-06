import React from 'react';

function Product(props) {
    return (
      <tr>
        <td name={props.name}>{props.name}</td>
        <td data-price={props.price}>{props.price}</td>
        <td data-qty={props.qty}>{props.qty}</td>
        <td><input onClick={props.clicked} type="checkbox" id={props.id}></input></td>
      </tr>
    );
}

export default Product;