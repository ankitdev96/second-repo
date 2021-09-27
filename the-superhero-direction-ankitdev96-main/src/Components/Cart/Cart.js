import React from 'react';

const Cart = (props) => {
     const {cart} = props;
     let total = 0;

     for(const singer of cart){
         total = total + singer.salary;
     }
 
    return (
        <div className="cartContainer">
            <h1>Singer Added:</h1>
            <h2><span>Total Cost:$ </span>{total}</h2>

            
        </div>
    );
};

export default Cart;