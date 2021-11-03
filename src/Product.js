import React, { useState } from 'react';
import ItemDescription from './ItemDescription';
import styles from './product.module.css';
function Product(props) {
    const [value, setValue] = useState(0);
    const [totalProd, setTotalProd] = useState(0);

    function increment() {
        setValue(value+1);
        setTotalProd(totalProd + (props.price));
        // console.log(totalProd, props.price);

    }
    function decrement() {
        if (value>0){
            setValue(value-1);
            // console.log(totalProd);
            setTotalProd((totalProd - (props.price)));
            // console.log(totalProd, props.price);

        }    
    }
    return (
        <div className={styles.product}>
            <h2>{props.name}</h2>
            <h2>${props.price}</h2>
            <p>{value}</p>
            <button onClick={decrement} >-</button>
            <button onClick={increment} >+</button>
            <p>total for the product: {totalProd}</p>
        </div>
    )
};

export default Product;


