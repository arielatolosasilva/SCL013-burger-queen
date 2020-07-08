import React from 'react';

function Product(props) {
  console.log(props.id)
    return (
      <tr key={props.id} id={props.id}>
        <td name={props.name}>{props.name}</td>
        <td data-price={props.price}>{props.price}</td>
        <td data-qty={props.qty}>{props.qty}</td>
        <td><input onClick={props.clicked} type="checkbox"></input></td>
      </tr>
    );
}

export default Product;