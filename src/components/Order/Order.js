import React from 'react';

function Order(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.price}</h1>
            <h1>{props.total}</h1>
        </div>
    );
}

export default Order;