import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singer from '../Singer/Singer';
import './Singers.css'

const Singers = () => {
    const[singers,setSinger] = useState([]);
    const[cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('./singers.JSON')
          .then(res => res.json())
          .then(data =>setSinger(data))
    },[]);

    const addToCartHandler = (product) =>{
        const newCartArray = [...cart,product]
        setCart(newCartArray);
   }


    return (
        <div className="singer">
            {/* <h1>Total Singers:{singers.length}</h1> */}
            <div className="singer-container">
                {
                    singers.map(singer=><Singer
                     singer={singer} key={singer.key}
                     addToCartHandler={addToCartHandler}>

                    </Singer>
                    )
                }
            </div>
            <div className="cart-item">
            
                <Cart cart ={cart} />
          
            </div>
            
        </div>
    );
};

export default Singers;