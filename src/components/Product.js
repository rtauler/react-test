import React from 'react';

function Product(props) {
    console.log(props);
    return (
        <div>
            <h2>Name: {props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            <h3>Description: {props.product.description}</h3>
        </div>
    )
}

export default Product;