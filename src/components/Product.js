import React from 'react';
function Product(props) {
    return (
      <tr>
        <td>{props.name}</td>
        <td>{props.price}</td>
        <td>{props.qty}</td>
      </tr>
    );
}
export default Product;
